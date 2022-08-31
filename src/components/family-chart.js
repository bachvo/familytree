import React from "react";
import f3 from "family-chart"; // npm i family-chart
import "../styles/family-chart.css"; // create file 'family-chart.css' in same directory, copy/paste css from examples/create-tree
import dataJson from "../data/data.json"

/**
 * Calculate a persons age
 * @param {string} birthdayString - day of birth format mm/dd/yyyy
 * @param {string} [deathdayString] - day of death format mm/dd/yyyy
 * @returns {number}
 */
function getAge(birthdayString, deathdayString) {
  const endDay = deathdayString ? new Date(deathdayString) : new Date();
  const birthDate = new Date(birthdayString);
  const m = endDay.getMonth() - birthDate.getMonth();
  let age = endDay.getFullYear() - birthDate.getFullYear();
  if (m < 0 || (m === 0 && endDay.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}

export default class FamilyTree extends React.Component {
  cont = React.createRef();

  componentDidMount() {
    if (!this.cont.current) return;

    const store = f3.createStore({
        data: dataJson,
        node_separation: 250,
        level_separation: 150
      }),
      view = f3.d3AnimationView({
        store,
        cont: document.querySelector("#FamilyChart")
      }),
      Card = f3.elements.Card({
        store,
        svg: view.svg,
        card_dim: {
          w: 220,
          h: 70,
          text_x: 75,
          text_y: 15,
          img_w: 60,
          img_h: 60,
          img_x: 5,
          img_y: 5
        },
        card_display: [
          (d) => `${d.data["first name"] || ""} ${d.data["last name"] || ""}`,
          (d) => {
            const birthday = d.data["birthday"];
            const deathday = d.data["deathday"];

            if (deathday) {
              return `${birthday || ""} - ${deathday || ""} (${getAge(birthday, deathday)})`
            }
            return `${birthday || ""} (${getAge(birthday)})`
          }
        ],
        mini_tree: true,
        link_break: false
      });

    view.setCard(Card);
    store.setOnUpdate((props) => view.update(props || {}));
    store.update.tree({ initial: true });
  }

  render() {
    return <div className="f3" id="FamilyChart" ref={this.cont}></div>;
  }
}
