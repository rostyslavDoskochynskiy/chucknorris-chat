/** @description
 * This is a class which has useful and necessary methods
 * for describing and styling a json tree
 * **/

export class JSONTreeDescriber {
  static parseKey = (key) => `"${key}"`;

  static parseValue = (value) => {
    const values = {
      string: `"${value}"`,
      number: value,
      DEFAULT: `${value}`,
    };

    return values[typeof value] || values.DEFAULT;
  };

  static parseType = (value) => {
    if (value === null) return "";
    return typeof value;
  };

  static getQuantityOfItems = (length) =>
    `${length} item${length > 1 ? "s" : ""}`;

  static setValueColorFor = (value) => {
    if (value === null) return "rgb(106, 106, 0)";
    if (value === "array") return "rgb(34,153,138)";
    if (value === "object") return "rgb(62,93,153)";

    const colors = {
      string: "rgb(180, 104, 29)",
      number: "rgb(163, 142, 103)",
      boolean: "rgb(153, 54, 130)",
    };

    return colors[typeof value];
  };
}
