import React, { useRef, useEffect } from 'react';
import styles from './Technologies.module.scss';

type Props = {
  title?: string,
  children: React.Node
};
const techs = [
      {
        name: "Databases", items: [
        {
          name: "Postgres", 
          imageUrl: "/media/data-tool-logos/postgres/PostgreSQL_logo.3colors.120x120.png",
          imgPadding: [5, 0, 5, 0],
        },
        {
          name: "Cassandra", 
          imageUrl: "/media/data-tool-logos/cassandra/cassandra-1.png",
          imgPadding: [5, 0, 5, 0],
        },
      ]},

      {name: "Message Queues", items: [
        {
          name: "Kafka", 
          imageUrl: "/media/data-tool-logos/kafka/kafka-logo-wide.png",
          imgPadding: [5, 0, 5, 0],
        },
      ]},

      {name: "Search Engines", items: [
        {name: "Elasticsearch", imageUrl: "/media/data-tool-logos/elasticsearch/brand-elasticsearch-220x130.png"},
        {
          name: "Solr", 
          imageUrl: "/media/data-tool-logos/solr-logos/Solr_Logo_on_white.png", 
          imgPadding: [5, 0, 20, 0],
        },
      ]},

      {name: "Data ETL Tools", items: [
        {
          name: "Spark", 
          imageUrl: "/media/data-tool-logos/spark/spark.png",
          imgPadding: [10, 0, 10, 0]
        },
        {
          name: "Airflow", 
          imageUrl: "/media/data-tool-logos/airflow/airflow-1.png",
          imgPadding: [15, 0, 15, 0]
        },
      ]},

      {name: "Cloud Services", items: [
        {
          name: "AWS", 
          imageUrl: "/media/data-tool-logos/aws/1280px-Amazon_Web_Services_Logo.svg.png",
          imgPadding: [25, 0, 25, 0],
        },
        {name: "Google Cloud Platform", imageUrl: "/media/data-tool-logos/gcp/lockup_cloud_main.png"}, 
        {name: "Heroku", imageUrl: "/media/data-tool-logos/heroku/PNG/heroku-logotype-vertical-purple.png"},
        {name: "Digital Ocean", imageUrl: "/media/data-tool-logos/digital-ocean/PNG/DO_Logo_Vertical_Blue.png"},
      ]},

      {name: "Web App Frameworks", items: [
        {
          name: "NodeJS", 
          imageUrl: "/media/data-tool-logos/nodejs/nodejs-new-pantone-black.png",
        },
        {
          name: "Rails", 
          imageUrl: "/media/data-tool-logos/rails/Ruby_On_Rails_Logo.svg.png",
          imgPadding: [25, 0, 25, 0],
        },
        {
          name: "Django", 
          imageUrl: "/media/data-tool-logos/django/django-logo-positive.png",
          imgPadding: [25, 0, 25, 0],
        },
        {
          name: "Flask", 
          imageUrl: "/media/data-tool-logos/flask/flask-logo-44C507ABB7-seeklogo.com.png",
          imgPadding: [10, 0, 10, 0],
        },
      ]},

      {name: "Frontend Frameworks", items: [
        {
          name: "React", 
          imageUrl: "/media/data-tool-logos/react/React-with-lg-text-horizontal.png",
          imgPadding: [15, 0, 15, 0],
        },
      ]},

      {name: "Languages", items: [
        {
          name: "Python",
          imageUrl: "/media/data-tool-logos/python/165px-Python-logo-notext.svg.png",
          imgPadding: [10, 0, 10, 0],
        },
        {
          name: "Java",
          imageUrl: "/media/data-tool-logos/java/212px-Java_programming_language_logo.svg.png",
          imgPadding: [0, 10, 0, 10],
        },
        {
          name: "Scala",
          imageUrl: "/media/data-tool-logos/scala/scala-lang.png",
        },
      ]},

]
const otherTechs = [

      {name: "Data Visualization Tools", items: [
        {name: "Kibana",},
        {name: "Zeppelin",},
        {name: "Jupyter",},
        {name: "Chart.js",},
        {name: "Searchkit"}
      ]},

      {name: "Also have some experience with:", items: [
        {name: "Redis",},
        //{name: "Flask",},
        {name: "Spring",},
        {name: "Electron",},
        {name: "GatsbyJS",},
        {name: "Firebase",},
        {name: "Matlab",},
        {name: "Ruby",},
        {name: "JavaScript",},
        {name: "Shell Scripting"},
      ]},
]

const Technologies = ({ title, children }: Props) => {
  return (
    <div className={styles["expertise-tech"]}>
      <div className={styles["expertise-tech-list"]}>
        {techs.map(techType => {
          return (
            <div className={styles["tech-type-container"]} key={techType.name} id={`tech-type-container-for-${techType.name.replace(" ", "")}`}>
              <h2 className={styles["tech-type-name"]}>{techType.name}</h2>
              <div className={styles["tech-items-container"]}>
                {techType.items.map(item => {
                  const imgPadding = item.imgPadding || [0, 0, 0, 0];
                  const totalHeightPadding = imgPadding[0] + imgPadding[2]
                  // can shrink the base img height (80) to a smaller px and everything scales down
                  // well
                  const imgHeight = 70 - totalHeightPadding

                  return (
                    <div className={styles["tech-item"]}>
                      <div className={styles["tech-item-name"]}>
                        {false && item.name}
                      </div>
                      <img className={styles["tech-item-logo"]} src={item.imageUrl} height={`${imgHeight}px`} style={{padding: imgPadding.map(px => `${px}px`).join(" ")}}/>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      <div className={styles["expertise-tech-list"]}>
        {otherTechs.map(techType => {
          return (
            <div className={styles["tech-type-container"]} key={techType.name} id={`tech-type-container-for-${techType.name.replace(" ", "")}`}>
              <h2 className={styles["tech-type-name"]}>{techType.name}</h2>
              <div className={styles["tech-items-container"]}>
                {techType.items.map(item => item.name).join(", ")}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Technologies;
