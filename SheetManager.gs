class SheetManager {
  constructor() {
    this.logger = new Logger('SheetManager');
  }

  setupSheetForEditing(sheet) {
    try {
      sheet.protect().remove();
      this.logger.info(`Enabled editing for sheet: ${sheet.getName()}`);
    } catch (error) {
      this.logger.error(`Failed to enable editing for sheet: ${sheet.getName()}`, error);
    }
  }
}
