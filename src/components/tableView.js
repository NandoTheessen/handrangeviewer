import React from "react";

const TableView = (range) => {
  return (
    <div>
      <section className="mdl-grid mdl-grid--no-spacing">
        <div className="mdl-cell mdl-cell--12-col">
          <h4 id="selectedGroupTitle">Actions</h4>
        </div>
        <div className="mdl-cell mdl-cell--12-col filters"></div>

        <div
          id="tableContainer"
          className="mdl-cell mdl-cell--6-col mdl-cell--12-col-tablet mdl-cell--12-col-phone"
        >
          <table
            id="fullTable"
            className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp"
          >
            <tbody>
              <tr>
                <td id="AA" className="cell p">
                  AA
                </td>

                <td id="AKs" className="cell s">
                  AKs
                </td>

                <td id="AQs" className="cell s">
                  AQs
                </td>

                <td id="AJs" className="cell s">
                  AJs
                </td>

                <td id="ATs" className="cell s">
                  ATs
                </td>

                <td id="A9s" className="cell s">
                  A9s
                </td>

                <td id="A8s" className="cell s">
                  A8s
                </td>

                <td id="A7s" className="cell s">
                  A7s
                </td>

                <td id="A6s" className="cell s">
                  A6s
                </td>

                <td id="A5s" className="cell s">
                  A5s
                </td>

                <td id="A4s" className="cell s">
                  A4s
                </td>

                <td id="A3s" className="cell s">
                  A3s
                </td>

                <td id="A2s" className="cell s">
                  A2s
                </td>
              </tr>

              <tr>
                <td id="AKo" className="cell o">
                  AKo
                </td>

                <td id="KK" className="cell p">
                  KK
                </td>

                <td id="KQs" className="cell s">
                  KQs
                </td>

                <td id="KJs" className="cell s">
                  KJs
                </td>

                <td id="KTs" className="cell s">
                  KTs
                </td>

                <td id="K9s" className="cell s">
                  K9s
                </td>

                <td id="K8s" className="cell s">
                  K8s
                </td>

                <td id="K7s" className="cell s">
                  K7s
                </td>

                <td id="K6s" className="cell s">
                  K6s
                </td>

                <td id="K5s" className="cell s">
                  K5s
                </td>

                <td id="K4s" className="cell s">
                  K4s
                </td>

                <td id="K3s" className="cell s">
                  K3s
                </td>

                <td id="K2s" className="cell s">
                  K2s
                </td>
              </tr>

              <tr>
                <td id="AQo" className="cell o">
                  AQo
                </td>

                <td id="KQo" className="cell o">
                  KQo
                </td>

                <td id="QQ" className="cell p">
                  QQ
                </td>

                <td id="QJs" className="cell s">
                  QJs
                </td>

                <td id="QTs" className="cell s">
                  QTs
                </td>

                <td id="Q9s" className="cell s">
                  Q9s
                </td>

                <td id="Q8s" className="cell s">
                  Q8s
                </td>

                <td id="Q7s" className="cell s">
                  Q7s
                </td>

                <td id="Q6s" className="cell s">
                  Q6s
                </td>

                <td id="Q5s" className="cell s">
                  Q5s
                </td>

                <td id="Q4s" className="cell s">
                  Q4s
                </td>

                <td id="Q3s" className="cell s">
                  Q3s
                </td>

                <td id="Q2s" className="cell s">
                  Q2s
                </td>
              </tr>

              <tr>
                <td id="AJo" className="cell o">
                  AJo
                </td>

                <td id="KJo" className="cell o">
                  KJo
                </td>

                <td id="QJo" className="cell o">
                  QJo
                </td>

                <td id="JJ" className="cell p">
                  JJ
                </td>

                <td id="JTs" className="cell s">
                  JTs
                </td>

                <td id="J9s" className="cell s">
                  J9s
                </td>

                <td id="J8s" className="cell s">
                  J8s
                </td>

                <td id="J7s" className="cell s">
                  J7s
                </td>

                <td id="J6s" className="cell s">
                  J6s
                </td>

                <td id="J5s" className="cell s">
                  J5s
                </td>

                <td id="J4s" className="cell s">
                  J4s
                </td>

                <td id="J3s" className="cell s">
                  J3s
                </td>

                <td id="J2s" className="cell s">
                  J2s
                </td>
              </tr>

              <tr>
                <td id="ATo" className="cell o">
                  ATo
                </td>

                <td id="KTo" className="cell o">
                  KTo
                </td>

                <td id="QTo" className="cell o">
                  QTo
                </td>

                <td id="JTo" className="cell o">
                  JTo
                </td>

                <td id="TT" className="cell p">
                  TT
                </td>

                <td id="T9s" className="cell s">
                  T9s
                </td>

                <td id="T8s" className="cell s">
                  T8s
                </td>

                <td id="T7s" className="cell s">
                  T7s
                </td>

                <td id="T6s" className="cell s">
                  T6s
                </td>

                <td id="T5s" className="cell s">
                  T5s
                </td>

                <td id="T4s" className="cell s">
                  T4s
                </td>

                <td id="T3s" className="cell s">
                  T3s
                </td>

                <td id="T2s" className="cell s">
                  T2s
                </td>
              </tr>

              <tr>
                <td id="A9o" className="cell o">
                  A9o
                </td>

                <td id="K9o" className="cell o">
                  K9o
                </td>

                <td id="Q9o" className="cell o">
                  Q9o
                </td>

                <td id="J9o" className="cell o">
                  J9o
                </td>

                <td id="T9o" className="cell o">
                  T9o
                </td>

                <td id="99" className="cell p">
                  99
                </td>

                <td id="98s" className="cell s">
                  98s
                </td>

                <td id="97s" className="cell s">
                  97s
                </td>

                <td id="96s" className="cell s">
                  96s
                </td>

                <td id="95s" className="cell s">
                  95s
                </td>

                <td id="94s" className="cell s">
                  94s
                </td>

                <td id="93s" className="cell s">
                  93s
                </td>

                <td id="92s" className="cell s">
                  92s
                </td>
              </tr>

              <tr>
                <td id="A8o" className="cell o">
                  A8o
                </td>

                <td id="K8o" className="cell o">
                  K8o
                </td>

                <td id="Q8o" className="cell o">
                  Q8o
                </td>

                <td id="J8o" className="cell o">
                  J8o
                </td>

                <td id="T8o" className="cell o">
                  T8o
                </td>

                <td id="98o" className="cell o">
                  98o
                </td>

                <td id="88" className="cell p">
                  88
                </td>

                <td id="87s" className="cell s">
                  87s
                </td>

                <td id="86s" className="cell s">
                  86s
                </td>

                <td id="85s" className="cell s">
                  85s
                </td>

                <td id="84s" className="cell s">
                  84s
                </td>

                <td id="83s" className="cell s">
                  83s
                </td>

                <td id="82s" className="cell s">
                  82s
                </td>
              </tr>

              <tr>
                <td id="A7o" className="cell o">
                  A7o
                </td>

                <td id="K7o" className="cell o">
                  K7o
                </td>

                <td id="Q7o" className="cell o">
                  Q7o
                </td>

                <td id="J7o" className="cell o">
                  J7o
                </td>

                <td id="T7o" className="cell o">
                  T7o
                </td>

                <td id="97o" className="cell o">
                  97o
                </td>

                <td id="87o" className="cell o">
                  87o
                </td>

                <td id="77" className="cell p">
                  77
                </td>

                <td id="76s" className="cell s">
                  76s
                </td>

                <td id="75s" className="cell s">
                  75s
                </td>

                <td id="74s" className="cell s">
                  74s
                </td>

                <td id="73s" className="cell s">
                  73s
                </td>

                <td id="72s" className="cell s">
                  72s
                </td>
              </tr>

              <tr>
                <td id="A6o" className="cell o">
                  A6o
                </td>

                <td id="K6o" className="cell o">
                  K6o
                </td>

                <td id="Q6o" className="cell o">
                  Q6o
                </td>

                <td id="J6o" className="cell o">
                  J6o
                </td>

                <td id="T6o" className="cell o">
                  T6o
                </td>

                <td id="96o" className="cell o">
                  96o
                </td>

                <td id="86o" className="cell o">
                  86o
                </td>

                <td id="76o" className="cell o">
                  76o
                </td>

                <td id="66" className="cell p">
                  66
                </td>

                <td id="65s" className="cell s">
                  65s
                </td>

                <td id="64s" className="cell s">
                  64s
                </td>

                <td id="63s" className="cell s">
                  63s
                </td>

                <td id="62s" className="cell s">
                  62s
                </td>
              </tr>

              <tr>
                <td id="A5o" className="cell o">
                  A5o
                </td>

                <td id="K5o" className="cell o">
                  K5o
                </td>

                <td id="Q5o" className="cell o">
                  Q5o
                </td>

                <td id="J5o" className="cell o">
                  J5o
                </td>

                <td id="T5o" className="cell o">
                  T5o
                </td>

                <td id="95o" className="cell o">
                  95o
                </td>

                <td id="85o" className="cell o">
                  85o
                </td>

                <td id="75o" className="cell o">
                  75o
                </td>

                <td id="65o" className="cell o">
                  65o
                </td>

                <td id="55" className="cell p">
                  55
                </td>

                <td id="54s" className="cell s">
                  54s
                </td>

                <td id="53s" className="cell s">
                  53s
                </td>

                <td id="52s" className="cell s">
                  52s
                </td>
              </tr>

              <tr>
                <td id="A4o" className="cell o">
                  A4o
                </td>

                <td id="K4o" className="cell o">
                  K4o
                </td>

                <td id="Q4o" className="cell o">
                  Q4o
                </td>

                <td id="J4o" className="cell o">
                  J4o
                </td>

                <td id="T4o" className="cell o">
                  T4o
                </td>

                <td id="94o" className="cell o">
                  94o
                </td>

                <td id="84o" className="cell o">
                  84o
                </td>

                <td id="74o" className="cell o">
                  74o
                </td>

                <td id="64o" className="cell o">
                  64o
                </td>

                <td id="54o" className="cell o">
                  54o
                </td>

                <td id="44" className="cell p">
                  44
                </td>

                <td id="43s" className="cell s">
                  43s
                </td>

                <td id="42s" className="cell s">
                  42s
                </td>
              </tr>

              <tr>
                <td id="A3o" className="cell o">
                  A3o
                </td>

                <td id="K3o" className="cell o">
                  K3o
                </td>

                <td id="Q3o" className="cell o">
                  Q3o
                </td>

                <td id="J3o" className="cell o">
                  J3o
                </td>

                <td id="T3o" className="cell o">
                  T3o
                </td>

                <td id="93o" className="cell o">
                  93o
                </td>

                <td id="83o" className="cell o">
                  83o
                </td>

                <td id="73o" className="cell o">
                  73o
                </td>

                <td id="63o" className="cell o">
                  63o
                </td>

                <td id="53o" className="cell o">
                  53o
                </td>

                <td id="43o" className="cell o">
                  43o
                </td>

                <td id="33" className="cell p">
                  33
                </td>

                <td id="32s" className="cell s">
                  32s
                </td>
              </tr>

              <tr>
                <td id="A2o" className="cell o">
                  A2o
                </td>

                <td id="K2o" className="cell o">
                  K2o
                </td>

                <td id="Q2o" className="cell o">
                  Q2o
                </td>

                <td id="J2o" className="cell o">
                  J2o
                </td>

                <td id="T2o" className="cell o">
                  T2o
                </td>

                <td id="92o" className="cell o">
                  92o
                </td>

                <td id="82o" className="cell o">
                  82o
                </td>

                <td id="72o" className="cell o">
                  72o
                </td>

                <td id="62o" className="cell o">
                  62o
                </td>

                <td id="52o" className="cell o">
                  52o
                </td>

                <td id="42o" className="cell o">
                  42o
                </td>

                <td id="32o" className="cell o">
                  32o
                </td>

                <td id="22" className="cell p">
                  22
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mdl-cell mdl-cell--3-col mdl-cell--12-col-tablet mdl-cell--12-col-phone">
          <ul className="mdl-list rangeBreakdown" style={{ display: "none;" }}>
            <li className="mdl-list__item mdl-list__item--two-line mdl-color--green">
              <span
                className="mdl-list__item-primary-content colorSelect"
                id="mdl-color--green"
              >
                select
              </span>
            </li>
            <li className="mdl-list__item mdl-list__item--two-line mdl-color--amber">
              <span
                className="mdl-list__item-primary-content colorSelect"
                id="mdl-color--amber"
              >
                select
              </span>
            </li>
            <li className="mdl-list__item mdl-list__item--two-line mdl-color--red">
              <span
                className="mdl-list__item-primary-content colorSelect"
                id="mdl-color--red"
              >
                select
              </span>
            </li>
            <li className="mdl-list__item mdl-list__item--two-line mdl-color--blue">
              <span
                className="mdl-list__item-primary-content colorSelect"
                id="mdl-color--blue"
              >
                select
              </span>
            </li>
            <li className="mdl-list__item mdl-list__item--two-line mdl-color--lime">
              <span
                className="mdl-list__item-primary-content colorSelect"
                id="mdl-color--lime"
              >
                select
              </span>
            </li>
            <li className="mdl-list__item mdl-list__item--two-line mdl-color--cyan">
              <span
                className="mdl-list__item-primary-content colorSelect"
                id="mdl-color--cyan"
              >
                select
              </span>
            </li>
            <li className="mdl-list__item mdl-list__item--two-line mdl-color--brown">
              <span
                className="mdl-list__item-primary-content colorSelect"
                id="mdl-color--brown"
              >
                select
              </span>
            </li>
            <li className="mdl-list__item mdl-list__item--two-line mdl-color--grey">
              <span
                className="mdl-list__item-primary-content colorSelect"
                id="mdl-color--grey"
              >
                select
              </span>
            </li>
            <li className="mdl-list__item mdl-list__item--two-line mdl-color--teal">
              <span
                className="mdl-list__item-primary-content colorSelect"
                id="mdl-color--teal"
              >
                select
              </span>
            </li>
            <li className="mdl-list__item mdl-list__item--two-line mdl-color--indigo">
              <span
                className="mdl-list__item-primary-content colorSelect"
                id="mdl-color--indigo"
              >
                select
              </span>
            </li>
            <li className="mdl-list__item mdl-list__item--two-line mdl-color--purple">
              <span
                className="mdl-list__item-primary-content colorSelect"
                id="mdl-color--purple"
              >
                select
              </span>
            </li>
            <li className="mdl-list__item mdl-list__item--two-line mdl-color--pink">
              <span
                className="mdl-list__item-primary-content colorSelect"
                id="mdl-color--pink"
              >
                select
              </span>
            </li>
            <li className="mdl-list__item mdl-list__item--two-line mdl-color--light-green">
              <span
                className="mdl-list__item-primary-content colorSelect"
                id="mdl-color--light-green"
              >
                select
              </span>
            </li>
            <li className="mdl-list__item mdl-list__item--two-line mdl-color--orange">
              <span
                className="mdl-list__item-primary-content colorSelect"
                id="mdl-color--orange"
              >
                select
              </span>
            </li>
            <li className="mdl-list__item mdl-list__item--two-line mdl-color--deep-orange">
              <span
                className="mdl-list__item-primary-content colorSelect"
                id="mdl-color--deep-orange"
              >
                select
              </span>
            </li>
            <li className="mdl-list__item mdl-list__item--two-line mdl-color--deep-purple">
              <span
                className="mdl-list__item-primary-content colorSelect"
                id="mdl-color--deep-purple"
              >
                select
              </span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default TableView;
