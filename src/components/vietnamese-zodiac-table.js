import React from "react";
import dataJson from "../data/data.json"
import { VIET_ZODIAC, getZodiacAnimalName } from "../utils/get-zodiac"

/**
 * Capitalize the first character in a string
 * @param {string} str - a string
 * @returns {string}
 */
function capitalizeFirstLetter(str) {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}

export default class VietnameseZodiacTable extends React.Component {
  constructor(props) {
    super(props);
    const familyArrayData = dataJson.slice();
    const familySize = familyArrayData.length;

    const zodiacHash = familyArrayData.reduce((dict, person) => {
      const { birthday } = person.data
      const birthYear = birthday.substring(birthday.length - 4);
      const fullName = `${person.data['first name']} ${person.data['last name']}`
      const animal = birthYear && getZodiacAnimalName(birthYear);

      if (!animal) {
        return dict;
      }

      if (!dict[animal]) {
        dict[animal] = {
          zodiac: animal,
          hex: VIET_ZODIAC[animal],
          count: 1,
          percentage: `${Math.round(1/familySize * 100)}%`,
          names: [fullName],
        }
      } else {
        dict[animal].count++
        dict[animal].names.push(fullName)
        dict[animal].percentage = `${Math.round(dict[animal].count/familySize * 100)}%`
      }

      return dict;
    }, {});

    const zodiacTable = Object.values(zodiacHash).sort((a, b) => b.count - a.count);
    this.state = {
      zodiacTable
    }
  }

  render() {
    return <div id="zodiac" className="vietnamese-zodiac-table">
      <h2>Vietnamese Zodiac Statistics</h2>
      <table className="table">
        <thead>
          <tr>
            {Object.keys(this.state.zodiacTable[0]).map((heading, key) => {
              if (heading === 'hex') {
                return ''
              }
              return <th scope="col" key={key}>{capitalizeFirstLetter(heading)}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {this.state.zodiacTable.map((data, key) => {
            return <tr key={key}>
              <td>{data.hex} {data.zodiac}</td>
              <td>{data.count}</td>
              <td>{data.percentage}</td>
              <td>{data.names.join(', ')}</td>
            </tr>
          })}
          </tbody>
      </table>
    </div>
  }
}