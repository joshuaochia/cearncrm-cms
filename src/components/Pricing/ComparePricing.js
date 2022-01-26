import React from "react";
import Title from "../Title";
import * as classes from "./ComparePricing.module.css";
import { FaCheckCircle } from "@react-icons/all-files/fa/FaCheckCircle";
import { FaTimesCircle } from "@react-icons/all-files/fa/FaTimesCircle";

const ComparePricing = ({ title, description, items }) => {
  const allCategory = items.map((item) => (
    <tr>
      <td>{item.category.text}</td>
    </tr>
  ));

  const allCondition = items.map((item) => (
    <tr>
      <td>{!item.free ? <FaTimesCircle /> : <FaCheckCircle />}</td>
      <td>{!item.standard ? <FaTimesCircle /> : <FaCheckCircle />}</td>
      <td>{!item.premium ? <FaTimesCircle /> : <FaCheckCircle />}</td>
    </tr>
  ));

  return (
    <div className={`${classes["compare__pricing"]} container mb-5`}>
      <Title title={title.text} description={description.text} />
      <div className="row">
        <div className="col-md-3">
          <table className="table text-center">
            <thead>
              <tr>
                <th scope="col">Lorem Ipsum</th>
              </tr>
            </thead>
            <tbody>{allCategory}</tbody>
          </table>
        </div>
        <div className="col-md-9">
          <table className="table table-striped text-center">
            <thead>
              <tr>
                <th scope="col">Free</th>
                <th scope="col">Standard</th>
                <th scope="col">Premium</th>
              </tr>
            </thead>
            <tbody>
              {allCondition}

              <tr>
                <td>
                  <button
                    style={{
                      borderRadius: "15px",
                      padding: "5px 20px",
                      border: "transparent",
                    }}
                    className="primary-1"
                  >
                    Get Now
                  </button>
                </td>
                <td>
                  <button
                    style={{
                      borderRadius: "15px",
                      padding: "5px 20px",
                      border: "transparent",
                    }}
                    className="primary-1"
                  >
                    Get Now
                  </button>
                </td>
                <td>
                  <button
                    style={{
                      borderRadius: "15px",
                      padding: "5px 20px",
                      border: "transparent",
                    }}
                    className="primary-1"
                  >
                    Get Now
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ComparePricing;
