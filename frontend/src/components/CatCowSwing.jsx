import React from "react";
import "./CatCowSwing.css";

export default function CatCowSwing() {
  return (
    <div className="cowcat-scene" aria-label="swinging cow-pattern cat">
      <div className="all-wrap">
        <div className="all">
          <div className="yarn"></div>
          <div className="cat-wrap">
            <div className="cat">
              <div className="cat-upper">
                <div className="cat-leg"></div>
                <div className="cat-leg"></div>

                <div className="cat-head">
                  <div className="cat-ears">
                    <div className="cat-ear"></div>
                    <div className="cat-ear"></div>
                  </div>
                  <div className="cat-face">
                    <div className="cat-eyes"></div>
                    <div className="cat-mouth"></div>
                    <div className="cat-whiskers"></div>
                  </div>
                </div>
              </div>

              <div className="cat-lower-wrap">
                <div className="cat-lower">
                  {/* left leg (deep nested) */}
                  <div className="cat-leg">
                    <div className="cat-leg">
                      <div className="cat-leg">
                        <div className="cat-leg">
                          <div className="cat-leg">
                            <div className="cat-leg">
                              <div className="cat-leg">
                                <div className="cat-leg">
                                  <div className="cat-leg">
                                    <div className="cat-leg">
                                      <div className="cat-leg">
                                        <div className="cat-leg">
                                          <div className="cat-leg">
                                            <div className="cat-leg">
                                              <div className="cat-leg">
                                                <div className="cat-leg">
                                                  <div className="cat-paw"></div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* right leg (deep nested) */}
                  <div className="cat-leg">
                    <div className="cat-leg">
                      <div className="cat-leg">
                        <div className="cat-leg">
                          <div className="cat-leg">
                            <div className="cat-leg">
                              <div className="cat-leg">
                                <div className="cat-leg">
                                  <div className="cat-leg">
                                    <div className="cat-leg">
                                      <div className="cat-leg">
                                        <div className="cat-leg">
                                          <div className="cat-leg">
                                            <div className="cat-leg">
                                              <div className="cat-leg">
                                                <div className="cat-leg">
                                                  <div className="cat-paw"></div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* tail (deep nested) */}
                  <div className="cat-tail">
                    <div className="cat-tail">
                      <div className="cat-tail">
                        <div className="cat-tail">
                          <div className="cat-tail">
                            <div className="cat-tail">
                              <div className="cat-tail">
                                <div className="cat-tail">
                                  <div className="cat-tail">
                                    <div className="cat-tail">
                                      <div className="cat-tail">
                                        <div className="cat-tail">
                                          <div className="cat-tail">
                                            <div className="cat-tail">
                                              <div className="cat-tail">
                                                <div className="cat-tail -end"></div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>{/* .cat-lower */}
              </div>{/* .cat-lower-wrap */}
            </div>{/* .cat */}
          </div>{/* .cat-wrap */}
        </div>{/* .all */}
      </div>{/* .all-wrap */}
    </div>
  );
}
