import type { Template } from '../types';

const sanitizeFilename = (name: string): string =>
  (name || 'template')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9-_ ]/g, '')
    .replace(/\s+/g, '_');

const triggerDownload = (blob: Blob, filename: string) => {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

export const downloadTemplateHtml = (template: Template) => {
  const html = `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="utf-8"><title>${template.title}</title></head><body>${template.htmlContent}</body></html>`;
  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  triggerDownload(blob, `${sanitizeFilename(template.title)}.html`);
};

export const downloadTemplatePdf = async (element: HTMLElement, template: Template) => {
  const html2canvas = (await import('html2canvas')).default;
  const { jsPDF } = await import('jspdf');

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    backgroundColor: '#ffffff',
  });

  const imgData = canvas.toDataURL('image/png');
  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 10;
  const imgWidth = pageWidth - margin * 2;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;

  const pdf = new jsPDF('p', 'mm', 'a4');

  let heightLeft = imgHeight;
  let position = margin;

  pdf.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
  heightLeft -= pageHeight - margin * 2;

  while (heightLeft > 0) {
    position = heightLeft - imgHeight + margin;
    pdf.addPage();
    pdf.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
    heightLeft -= pageHeight - margin * 2;
  }

  pdf.save(`${sanitizeFilename(template.title)}.pdf`);
};

export const downloadTemplateDocx = async (template: Template) => {
  const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, AlignmentType } =
    await import('docx');

  type DocxParagraph = InstanceType<typeof Paragraph>;
  type DocxTable = InstanceType<typeof Table>;

  const parseHtmlToDocx = (html: string): (DocxParagraph | DocxTable)[] => {
    const container = document.createElement('div');
    container.innerHTML = html;

    const elements: (DocxParagraph | DocxTable)[] = [];

    container.querySelectorAll('h1, h2, p, ul, table').forEach((node) => {
      switch (node.tagName) {
        case 'H1':
        case 'H2':
          elements.push(
            new Paragraph({
              heading: node.tagName === 'H1' ? 'Heading1' : 'Heading2',
              spacing: { after: 120 },
              children: [new TextRun({ text: node.textContent ?? '', bold: true })],
            })
          );
          break;
        case 'P':
          elements.push(
            new Paragraph({
              spacing: { after: 80 },
              children: [new TextRun({ text: node.textContent ?? '' })],
            })
          );
          break;
        case 'UL':
          node.querySelectorAll(':scope > li').forEach((li) => {
            elements.push(
              new Paragraph({
                bullet: { level: 0 },
                children: [new TextRun({ text: li.textContent ?? '' })],
              })
            );
          });
          break;
        case 'TABLE':
          {
            const headerCells: string[] = [];
            const firstRow = node.querySelector('tr');
            firstRow?.querySelectorAll('th, td').forEach((cell) => headerCells.push(cell.textContent ?? ''));

            const bodyRows: string[][] = [];
            node.querySelectorAll('tr:not(:first-child)').forEach((row) => {
              const cells: string[] = [];
              row.querySelectorAll('td').forEach((cell) => cells.push(cell.textContent ?? ''));
              bodyRows.push(cells);
            });

            const headerRow = new TableRow({
              tableHeader: true,
              children: headerCells.map(
                (cell) =>
                  new TableCell({
                    width: { size: 100 / headerCells.length, type: WidthType.PERCENTAGE },
                    children: [new Paragraph({ children: [new TextRun({ text: cell, bold: true })] })],
                  })
              ),
            });

            const rows = bodyRows.map(
              (row) =>
                new TableRow({
                  children: row.map(
                    (cell) =>
                      new TableCell({
                        width: { size: 100 / row.length, type: WidthType.PERCENTAGE },
                        children: [new Paragraph({ children: [new TextRun({ text: cell })] })],
                      })
                  ),
                })
            );

            elements.push(
              new Table({
                width: { size: 100, type: WidthType.PERCENTAGE },
                rows: [headerRow, ...rows],
              })
            );
          }
          break;
        default:
          break;
      }
    });

    return elements;
  };

  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [new TextRun({ text: template.title, bold: true, size: 28 })],
          }),
          ...parseHtmlToDocx(template.htmlContent),
        ],
      },
    ],
  });

  const blob = await Packer.toBlob(doc);
  triggerDownload(blob, `${sanitizeFilename(template.title)}.docx`);
};
