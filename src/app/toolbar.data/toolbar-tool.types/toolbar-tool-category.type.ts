export const ToolbarToolCategory = {
  annotation: 'annotation',
  operation: 'operation',
  pdfField: 'pdfField',
} as const;
export type ToolbarToolCategory =
  typeof ToolbarToolCategory[keyof typeof ToolbarToolCategory];
