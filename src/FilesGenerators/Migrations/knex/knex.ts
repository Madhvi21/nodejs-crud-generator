import raw from "raw.macro";
import Handlebars from "handlebars";
import { Entity, Settings } from "../../../Application/types";
import { FileGenerator } from "../../types";

class KnexMigrationGen extends FileGenerator {
  protected static getHbsTemplate(): HandlebarsTemplateDelegate<any> {
    const txt = raw("./template.hbs");
    const template = Handlebars.compile(txt);
    return template;
  }
  
  public static compileFile(
    entity: Entity | undefined,
    settings: Settings | undefined
  ): string {
    const template = KnexMigrationGen.getHbsTemplate();

    return template({ ...settings, ...entity });
  }
}

export default KnexMigrationGen;
