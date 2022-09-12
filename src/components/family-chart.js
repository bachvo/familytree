import React from "react";
import f3 from "family-chart";
import dataJson from "../data/data.json"
import getAge from "../utils/get-age"
import getZodiacAnimalHex from "../utils/get-zodiac"

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
            const birthYear = birthday.substring(birthday.length - 4);
            const deathday = d.data["deathday"];
            const deathYear = deathday.substring(deathday.length - 4);

            if (birthday && deathday) {
              return `${birthYear} - ${deathYear} ${getZodiacAnimalHex(birthYear)} (${getAge(birthday, deathday)})`
            }

            if (birthday) {
              return `${birthYear} ${getZodiacAnimalHex(birthYear)} (${getAge(birthday)})`
            }

            return "";
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
