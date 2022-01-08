import React from "react";
import Title from "../Title";
import { FaCheckCircle } from "@react-icons/all-files/fa/FaCheckCircle";
import { FaTimesCircle } from "@react-icons/all-files/fa/FaTimesCircle";
const ComparePricing = () => {
  return (
    <div className="container mb-5">
      <Title />
      <div className="row">
        <div className="col-md-3">
          <table className="table text-center">
            <thead>
              <tr>
                <th scope="col">Lorem Ipsum</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Larry</td>
              </tr>
              <tr>
                <td>Larry</td>
              </tr>
              <tr>
                <td>Larry</td>
              </tr>
              <tr>
                <td>Larry</td>
              </tr>
              <tr>
                <td>Larry</td>
              </tr>
              <tr>
                <td>Larry</td>
              </tr>
              <tr>
                <td>Larry</td>
              </tr>
            </tbody>
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
              <tr>
                <td>
                  <FaTimesCircle />
                </td>
                <td>
                  <FaCheckCircle />
                </td>
                <td>
                  <FaCheckCircle />
                </td>
              </tr>
              <tr>
                <td>
                  <FaCheckCircle />
                </td>
                <td>
                  <FaCheckCircle />
                </td>
                <td>
                  <FaCheckCircle />
                </td>
              </tr>
              <tr>
                <td>
                  <FaCheckCircle />
                </td>
                <td>
                  <FaTimesCircle />
                </td>
                <td>
                  <FaTimesCircle />
                </td>
              </tr>
              <tr>
                <td>
                  <FaTimesCircle />
                </td>
                <td>
                  <FaCheckCircle />
                </td>
                <td>
                  <FaCheckCircle />
                </td>
              </tr>
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
