module GetPodcasts = [%graphql
  {|
  query getFeed {
    rss {
      rss2Feed(url: "http://podcasts.files.bbci.co.uk/p02pc9pj.rss") {
        items {
          source {
            data
            url
          }
          enclosure {
            url
            length
            mime
          }
          content
          pubDate
          contentUri
          comments
          link
          author
          title
        }
        title
        image {
          height
          title
          uri
          width
          description
        }
      }
    }
  }
|}
];

module GetPodcastsQuery = ReasonApollo.CreateQuery(GetPodcasts);

type state = {selectedId: int};

type action =
  | Select(int);

/* This is the basic component. */
let component = ReasonReact.reducerComponent("Page");

/* This is your familiar handleClick from ReactJS. This mandatorily takes the payload,
   then the `self` record, which contains state (none here), `handle`, `send`
   and other utilities */

/* `make` is the function that mandatorily takes `children` (if you want to use
   `JSX). `message` is a named argument, which simulates ReactJS props. Usage:

   `<Page message="hello" />`

   Which desugars to

   `ReasonReact.element (Page.make message::"hello" [||])` */
let make = _children => {
  ...component,

  initialState: () => {selectedId: (-1)},

  reducer: (action, _state) =>
    switch (action) {
    | Select(id) => ReasonReact.Update({selectedId: id})
    },

  render: self =>
    <GetPodcastsQuery>
      ...{
           ({result}) =>
             switch (result) {
             | Loading => <div> {ReasonReact.string("Loading")} </div>
             | Error(error) =>
               <div> {ReasonReact.string(error##message)} </div>
             | Data(response) =>
               <div>
                 <h2>
                   {ReasonReact.string(response##rss##rss2Feed##title)}
                 </h2>
                 {
                   switch (response##rss##rss2Feed##image) {
                   | None => <div />
                   | Some(image) =>
                     <img
                       src=image##uri
                       height={string_of_int(image##height)}
                       width={string_of_int(image##width)}
                     />
                   }
                 }
                 <hr />
                 <div>
                   ...{
                        Array.mapi(
                          (i, item) =>
                            <Podcast
                              id=i
                              selectedId={self.state.selectedId}
                              handleClick={_event => self.send(Select(i))}
                              podcast=item
                            />,
                          response##rss##rss2Feed##items,
                        )
                      }
                 </div>
               </div>
             }
         }
    </GetPodcastsQuery>,
};