'use strict';

var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var ApolloProvider = require("reason-apollo/src/ApolloProvider.bs.js");
var Page$ReasonReactExample = require("./Page.bs.js");
var Client$ReasonReactExample = require("./Client.bs.js");

ReactDOMRe.renderToElementWithId(ReasonReact.element(undefined, undefined, ApolloProvider.make(Client$ReasonReactExample.instance, /* array */[ReasonReact.element(undefined, undefined, Page$ReasonReactExample.make(/* array */[]))])), "index");

/*  Not a pure module */
