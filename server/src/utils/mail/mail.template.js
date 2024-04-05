export const HtmlTemplate = (codePIN) => {
  return `
                  <div
                      style="
                          background-color: #f5f5f5;
                          display: grid;
                          place-items: center;
                          padding: 10px 20px;
                          font-family: sans-serif;
                          border: 1px solid #ccc;
                          width: fit-content;
                          color: #27374D;
                      "
                  >
                      <h1
                          style="
                              padding: 10px 0;
                              margin: 0;
                              color: #0079FF;
                          "
                      >
                          Reset password
                      </h1>
                      <p
                          style="
                              padding: 0 0 5px 0;
                              margin: 0;
                          "
                      >
                          You have asked for a reset password for your 
                          <span
                              style="
                                  font-weight: bold;
                                  font-size: 16px;
                              "
                          >
                              HAWASSDZ
                          </span>
                          account
                      </p>
                      <p
                          style="
                              padding: 10px 0;
                              margin: 0;
                          "
                      >
                          Your reset password token is
                          <strong>${codePIN}</strong>
                      </p>
                  </div>
              `;
};
