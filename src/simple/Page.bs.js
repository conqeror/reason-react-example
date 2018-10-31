'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Js_exn = require("bs-platform/lib/js/js_exn.js");
var Js_json = require("bs-platform/lib/js/js_json.js");
var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var ReasonApollo = require("reason-apollo/src/ReasonApollo.bs.js");
var Podcast$ReasonReactExample = require("./Podcast.bs.js");

var ppx_printed_query = "query getFeed  {\nrss  {\nrss2Feed(url: \"http://podcasts.files.bbci.co.uk/p02pc9pj.rss\")  {\nitems  {\nsource  {\ndata  \nurl  \n}\n\nenclosure  {\nurl  \nlength  \nmime  \n}\n\ncontent  \npubDate  \ncontentUri  \ncomments  \nlink  \nauthor  \ntitle  \n}\n\ntitle  \nimage  {\nheight  \ntitle  \nuri  \nwidth  \ndescription  \n}\n\n}\n\n}\n\n}\n";

function parse(value) {
  var match = Js_json.decodeObject(value);
  if (match !== undefined) {
    var match$1 = Js_primitive.valFromOption(match)["rss"];
    var tmp;
    if (match$1 !== undefined) {
      var match$2 = Js_json.decodeObject(match$1);
      if (match$2 !== undefined) {
        var match$3 = Js_primitive.valFromOption(match$2)["rss2Feed"];
        var tmp$1;
        if (match$3 !== undefined) {
          var match$4 = Js_json.decodeObject(match$3);
          if (match$4 !== undefined) {
            var value$1 = Js_primitive.valFromOption(match$4);
            var match$5 = value$1["items"];
            var tmp$2;
            if (match$5 !== undefined) {
              var match$6 = Js_json.decodeArray(match$5);
              tmp$2 = match$6 !== undefined ? match$6.map((function (value) {
                        var match = Js_json.decodeObject(value);
                        if (match !== undefined) {
                          var value$1 = Js_primitive.valFromOption(match);
                          var match$1 = value$1["source"];
                          var tmp;
                          if (match$1 !== undefined) {
                            var match$2 = Js_json.decodeNull(match$1);
                            if (match$2 !== undefined) {
                              tmp = undefined;
                            } else {
                              var match$3 = Js_json.decodeObject(match$1);
                              var tmp$1;
                              if (match$3 !== undefined) {
                                var value$2 = Js_primitive.valFromOption(match$3);
                                var match$4 = value$2["data"];
                                var tmp$2;
                                if (match$4 !== undefined) {
                                  var match$5 = Js_json.decodeString(match$4);
                                  tmp$2 = match$5 !== undefined ? match$5 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(match$4));
                                } else {
                                  tmp$2 = Js_exn.raiseError("graphql_ppx: Field data on type Rss2Source is missing");
                                }
                                var match$6 = value$2["url"];
                                var tmp$3;
                                if (match$6 !== undefined) {
                                  var match$7 = Js_json.decodeString(match$6);
                                  tmp$3 = match$7 !== undefined ? match$7 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(match$6));
                                } else {
                                  tmp$3 = Js_exn.raiseError("graphql_ppx: Field url on type Rss2Source is missing");
                                }
                                tmp$1 = {
                                  data: tmp$2,
                                  url: tmp$3
                                };
                              } else {
                                tmp$1 = Js_exn.raiseError("graphql_ppx: Object is not a value");
                              }
                              tmp = Js_primitive.some(tmp$1);
                            }
                          } else {
                            tmp = undefined;
                          }
                          var match$8 = value$1["enclosure"];
                          var tmp$4;
                          if (match$8 !== undefined) {
                            var match$9 = Js_json.decodeNull(match$8);
                            if (match$9 !== undefined) {
                              tmp$4 = undefined;
                            } else {
                              var match$10 = Js_json.decodeObject(match$8);
                              var tmp$5;
                              if (match$10 !== undefined) {
                                var value$3 = Js_primitive.valFromOption(match$10);
                                var match$11 = value$3["url"];
                                var tmp$6;
                                if (match$11 !== undefined) {
                                  var match$12 = Js_json.decodeString(match$11);
                                  tmp$6 = match$12 !== undefined ? match$12 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(match$11));
                                } else {
                                  tmp$6 = Js_exn.raiseError("graphql_ppx: Field url on type Rss2Enclosure is missing");
                                }
                                var match$13 = value$3["length"];
                                var tmp$7;
                                if (match$13 !== undefined) {
                                  var match$14 = Js_json.decodeNumber(match$13);
                                  tmp$7 = match$14 !== undefined ? match$14 | 0 : Js_exn.raiseError("graphql_ppx: Expected int, got " + JSON.stringify(match$13));
                                } else {
                                  tmp$7 = Js_exn.raiseError("graphql_ppx: Field length on type Rss2Enclosure is missing");
                                }
                                var match$15 = value$3["mime"];
                                var tmp$8;
                                if (match$15 !== undefined) {
                                  var match$16 = Js_json.decodeString(match$15);
                                  tmp$8 = match$16 !== undefined ? match$16 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(match$15));
                                } else {
                                  tmp$8 = Js_exn.raiseError("graphql_ppx: Field mime on type Rss2Enclosure is missing");
                                }
                                tmp$5 = {
                                  url: tmp$6,
                                  length: tmp$7,
                                  mime: tmp$8
                                };
                              } else {
                                tmp$5 = Js_exn.raiseError("graphql_ppx: Object is not a value");
                              }
                              tmp$4 = Js_primitive.some(tmp$5);
                            }
                          } else {
                            tmp$4 = undefined;
                          }
                          var match$17 = value$1["content"];
                          var tmp$9;
                          if (match$17 !== undefined) {
                            var match$18 = Js_json.decodeString(match$17);
                            tmp$9 = match$18 !== undefined ? match$18 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(match$17));
                          } else {
                            tmp$9 = Js_exn.raiseError("graphql_ppx: Field content on type Rss2FeedItem is missing");
                          }
                          var match$19 = value$1["pubDate"];
                          var tmp$10;
                          if (match$19 !== undefined) {
                            var match$20 = Js_json.decodeNull(match$19);
                            if (match$20 !== undefined) {
                              tmp$10 = undefined;
                            } else {
                              var match$21 = Js_json.decodeNumber(match$19);
                              tmp$10 = match$21 !== undefined ? match$21 : Js_exn.raiseError("graphql_ppx: Expected float, got " + JSON.stringify(match$19));
                            }
                          } else {
                            tmp$10 = undefined;
                          }
                          var match$22 = value$1["contentUri"];
                          var tmp$11;
                          if (match$22 !== undefined) {
                            var match$23 = Js_json.decodeNull(match$22);
                            if (match$23 !== undefined) {
                              tmp$11 = undefined;
                            } else {
                              var match$24 = Js_json.decodeString(match$22);
                              tmp$11 = match$24 !== undefined ? match$24 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(match$22));
                            }
                          } else {
                            tmp$11 = undefined;
                          }
                          var match$25 = value$1["comments"];
                          var tmp$12;
                          if (match$25 !== undefined) {
                            var match$26 = Js_json.decodeNull(match$25);
                            if (match$26 !== undefined) {
                              tmp$12 = undefined;
                            } else {
                              var match$27 = Js_json.decodeString(match$25);
                              tmp$12 = match$27 !== undefined ? match$27 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(match$25));
                            }
                          } else {
                            tmp$12 = undefined;
                          }
                          var match$28 = value$1["link"];
                          var tmp$13;
                          if (match$28 !== undefined) {
                            var match$29 = Js_json.decodeNull(match$28);
                            if (match$29 !== undefined) {
                              tmp$13 = undefined;
                            } else {
                              var match$30 = Js_json.decodeString(match$28);
                              tmp$13 = match$30 !== undefined ? match$30 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(match$28));
                            }
                          } else {
                            tmp$13 = undefined;
                          }
                          var match$31 = value$1["author"];
                          var tmp$14;
                          if (match$31 !== undefined) {
                            var match$32 = Js_json.decodeNull(match$31);
                            if (match$32 !== undefined) {
                              tmp$14 = undefined;
                            } else {
                              var match$33 = Js_json.decodeString(match$31);
                              tmp$14 = match$33 !== undefined ? match$33 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(match$31));
                            }
                          } else {
                            tmp$14 = undefined;
                          }
                          var match$34 = value$1["title"];
                          var tmp$15;
                          if (match$34 !== undefined) {
                            var match$35 = Js_json.decodeString(match$34);
                            tmp$15 = match$35 !== undefined ? match$35 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(match$34));
                          } else {
                            tmp$15 = Js_exn.raiseError("graphql_ppx: Field title on type Rss2FeedItem is missing");
                          }
                          return {
                                  source: tmp,
                                  enclosure: tmp$4,
                                  content: tmp$9,
                                  pubDate: tmp$10,
                                  contentUri: tmp$11,
                                  comments: tmp$12,
                                  link: tmp$13,
                                  author: tmp$14,
                                  title: tmp$15
                                };
                        } else {
                          return Js_exn.raiseError("graphql_ppx: Object is not a value");
                        }
                      })) : Js_exn.raiseError("graphql_ppx: Expected array, got " + JSON.stringify(match$5));
            } else {
              tmp$2 = Js_exn.raiseError("graphql_ppx: Field items on type Rss2Channel is missing");
            }
            var match$7 = value$1["title"];
            var tmp$3;
            if (match$7 !== undefined) {
              var match$8 = Js_json.decodeString(match$7);
              tmp$3 = match$8 !== undefined ? match$8 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(match$7));
            } else {
              tmp$3 = Js_exn.raiseError("graphql_ppx: Field title on type Rss2Channel is missing");
            }
            var match$9 = value$1["image"];
            var tmp$4;
            if (match$9 !== undefined) {
              var match$10 = Js_json.decodeNull(match$9);
              if (match$10 !== undefined) {
                tmp$4 = undefined;
              } else {
                var match$11 = Js_json.decodeObject(match$9);
                var tmp$5;
                if (match$11 !== undefined) {
                  var value$2 = Js_primitive.valFromOption(match$11);
                  var match$12 = value$2["height"];
                  var tmp$6;
                  if (match$12 !== undefined) {
                    var match$13 = Js_json.decodeNumber(match$12);
                    tmp$6 = match$13 !== undefined ? match$13 | 0 : Js_exn.raiseError("graphql_ppx: Expected int, got " + JSON.stringify(match$12));
                  } else {
                    tmp$6 = Js_exn.raiseError("graphql_ppx: Field height on type Rss2FeedImage is missing");
                  }
                  var match$14 = value$2["title"];
                  var tmp$7;
                  if (match$14 !== undefined) {
                    var match$15 = Js_json.decodeString(match$14);
                    tmp$7 = match$15 !== undefined ? match$15 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(match$14));
                  } else {
                    tmp$7 = Js_exn.raiseError("graphql_ppx: Field title on type Rss2FeedImage is missing");
                  }
                  var match$16 = value$2["uri"];
                  var tmp$8;
                  if (match$16 !== undefined) {
                    var match$17 = Js_json.decodeString(match$16);
                    tmp$8 = match$17 !== undefined ? match$17 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(match$16));
                  } else {
                    tmp$8 = Js_exn.raiseError("graphql_ppx: Field uri on type Rss2FeedImage is missing");
                  }
                  var match$18 = value$2["width"];
                  var tmp$9;
                  if (match$18 !== undefined) {
                    var match$19 = Js_json.decodeNumber(match$18);
                    tmp$9 = match$19 !== undefined ? match$19 | 0 : Js_exn.raiseError("graphql_ppx: Expected int, got " + JSON.stringify(match$18));
                  } else {
                    tmp$9 = Js_exn.raiseError("graphql_ppx: Field width on type Rss2FeedImage is missing");
                  }
                  var match$20 = value$2["description"];
                  var tmp$10;
                  if (match$20 !== undefined) {
                    var match$21 = Js_json.decodeNull(match$20);
                    if (match$21 !== undefined) {
                      tmp$10 = undefined;
                    } else {
                      var match$22 = Js_json.decodeString(match$20);
                      tmp$10 = match$22 !== undefined ? match$22 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(match$20));
                    }
                  } else {
                    tmp$10 = undefined;
                  }
                  tmp$5 = {
                    height: tmp$6,
                    title: tmp$7,
                    uri: tmp$8,
                    width: tmp$9,
                    description: tmp$10
                  };
                } else {
                  tmp$5 = Js_exn.raiseError("graphql_ppx: Object is not a value");
                }
                tmp$4 = Js_primitive.some(tmp$5);
              }
            } else {
              tmp$4 = undefined;
            }
            tmp$1 = {
              items: tmp$2,
              title: tmp$3,
              image: tmp$4
            };
          } else {
            tmp$1 = Js_exn.raiseError("graphql_ppx: Object is not a value");
          }
        } else {
          tmp$1 = Js_exn.raiseError("graphql_ppx: Field rss2Feed on type RssQuery is missing");
        }
        tmp = {
          rss2Feed: tmp$1
        };
      } else {
        tmp = Js_exn.raiseError("graphql_ppx: Object is not a value");
      }
    } else {
      tmp = Js_exn.raiseError("graphql_ppx: Field rss on type Query is missing");
    }
    return {
            rss: tmp
          };
  } else {
    return Js_exn.raiseError("graphql_ppx: Object is not a value");
  }
}

function make() {
  return {
          query: ppx_printed_query,
          variables: null,
          parse: parse
        };
}

function makeWithVariables() {
  return {
          query: ppx_printed_query,
          variables: null,
          parse: parse
        };
}

function ret_type() {
  return /* module */[];
}

var MT_Ret = /* module */[];

var GetPodcasts = /* module */[
  /* ppx_printed_query */ppx_printed_query,
  /* query */ppx_printed_query,
  /* parse */parse,
  /* make */make,
  /* makeWithVariables */makeWithVariables,
  /* ret_type */ret_type,
  /* MT_Ret */MT_Ret
];

var GetPodcastsQuery = ReasonApollo.CreateQuery([
      ppx_printed_query,
      parse
    ]);

var component = ReasonReact.statelessComponent("Page");

function handleClick(_, _$1) {
  console.log("clicked!");
  return /* () */0;
}

function make$1() {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function () {
              return ReasonReact.element(undefined, undefined, Curry.app(GetPodcastsQuery[/* make */3], [
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              (function (param) {
                                  var result = param[/* result */0];
                                  if (typeof result === "number") {
                                    return React.createElement("div", undefined, "Loading");
                                  } else if (result.tag) {
                                    var response = result[0];
                                    var match = response.rss.rss2Feed.image;
                                    var tmp;
                                    if (match !== undefined) {
                                      var image = Js_primitive.valFromOption(match);
                                      tmp = React.createElement("img", {
                                            height: String(image.height),
                                            src: image.uri,
                                            width: String(image.width)
                                          });
                                    } else {
                                      tmp = React.createElement("div", undefined);
                                    }
                                    return React.createElement("div", undefined, React.createElement("h2", undefined, response.rss.rss2Feed.title), tmp, React.createElement("hr", undefined), ReactDOMRe.createElementVariadic("div", undefined, $$Array.mapi((function (i, item) {
                                                          return ReasonReact.element(undefined, undefined, Podcast$ReasonReactExample.make(i, item, /* array */[]));
                                                        }), response.rss.rss2Feed.items)));
                                  } else {
                                    return React.createElement("div", undefined, result[0].message);
                                  }
                                })
                            ]));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

exports.GetPodcasts = GetPodcasts;
exports.GetPodcastsQuery = GetPodcastsQuery;
exports.component = component;
exports.handleClick = handleClick;
exports.make = make$1;
/* GetPodcastsQuery Not a pure module */
