import React, { useRef, useEffect, useState } from 'react';
import styles from './Page.module.scss';
import {Helmet} from "react-helmet";
import {useScript} from "../../utils";

class MediumWidget extends React.Component {
  componentDidMount() {
    window.mediumWidget();
  }
}

type Props = {
  title?: string,
  children: React.Node
};

const Page = ({ title, children }: Props) => {
  const pageRef = useRef();

  // componentDidMount for functional component (slightly different behaviour though)
  useEffect(() => {
    pageRef.current.scrollIntoView();
  })



  // useEffect(() => {
    // for medium widget, to display blogs on pages/blog
    // https://stackoverflow.com/a/34425083/6952495
    // Doing it this way to make sure downloads before we run our script
    // const script = document.createElement('script');
    // script.src = "";
    // script.async = true;
    // console.log("running")


    // https://medium-widget.pixelpoint.io/
    // Should only work on our blogs page
    // script.onload = () => {
    //   console.log("loaded")

    // }

    // document.body.appendChild(script);
    // console.log("appending...")
  // });

  const initWidget = () => {
    try {
      window.MediumWidget.Init({
        renderTo: '#medium-widget', 
        params: {
          "resource": "https://medium.com/@ryanquey",
          "postsPerLine":2,
          "limit":4,
          "picture": "big", //"small",
          "fields": ["description","author","claps","likes","publishAt"],
          "ratio": "landscape"
        }
      })

      setLoadedWidget(true)
    } catch (e) {
      console.error(e);
    }
  }

  const widgetExists = () => {
    // if they go away and come back, we want to be sure to rerender this thing.
    const widget = document.getElementsByClassName("medium-widget")
    console.log("exists?", widget)
    return widget
  }

  const status = useScript(
    "https://medium-widget.pixelpoint.io/widget.js"
  );

  const [loadedWidget, setLoadedWidget] = useState(false);

  return (
    <div ref={pageRef} className={styles['page']} id={title.toLowerCase() + "-page"}>
      <div className={styles['page__inner']}>
        { title && <h1 className={styles['page__title']}>{title}</h1>}
        <div className={styles['page__body']}>
          {children}
          <MediumWidget />
        </div>
        {false && status === "ready" && (!loadedWidget || !widgetExists()) && (initWidget())}
      </div>
    </div>
  );
};

export default Page;