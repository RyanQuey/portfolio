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
          imageUrl: "/media/data-tool-logos/postgres/PostgreSQL_logo.3colors.120x120.png"
        },
        {
          name: "Cassandra", 
          imageUrl: "/media/data-tool-logos/cassandra/cassandra-1.png"
        },
        ]},

      {name: "Message Queues", items: [
        {name: "Kafka", imageUrl: "/media/data-tool-logos/kafka/kafka-logo-wide.png"},
      ]},

      {name: "Search Engines", items: [
        {name: "Elasticsearch", imageUrl: "/media/data-tool-logos/elasticsearch/brand-elasticsearch-220x130.png"},
        {name: "Solr", imageUrl: "/media/data-tool-logos/solr-logos/Solr_Logo_on_white.png"},
      ]},

      {name: "Data ETL Tools", items: [
        {name: "Spark", imageUrl: "/media/data-tool-logos/spark/spark.png"},
        {name: "Airflow", imageUrl: "/media/data-tool-logos/airflow/airflow-1.png"},
      ]},

      {name: "Cloud Services", items: [
        {name: "AWS", imageUrl: "/media/data-tool-logos/aws/1280px-Amazon_Web_Services_Logo.svg.png"},
        {name: "Google Cloud Platform", imageUrl: "/media/data-tool-logos/gcp/lockup_cloud_main.png"}, 
        {name: "Heroku", imageUrl: "/media/data-tool-logos/heroku/PNG/heroku-logotype-vertical-purple.png"},
      ]},

      {name: "Web App Frameworks", items: [
        {name: "NodeJS", imageUrl: "/media/data-tool-logos/nodejs/nodejs-new-pantone-black.png"},
        {name: "Rails", imageUrl: "/media/data-tool-logos/rails/Ruby_On_Rails_Logo.svg.png"},
        {name: "Django", imageUrl: "/media/data-tool-logos/django/django-logo-positive.png"},
        {name: "Flask", imageUrl: "/media/data-tool-logos/flask/flask-logo-44C507ABB7-seeklogo.com.png"},
      ]},

      {name: "JavaScript Frameworks", items: [
        {name: "React", imageUrl: "/media/data-tool-logos/react/React-icon.svg.png"},
      ]},

]
const otherTechs = [
      {name: "Languages", items: [
        {name: "Python",},
        {name: "Java",},
        {name: "Scala",},
        {name: "JavaScript",},
        {name: "Ruby",},
        {name: "SQL",},
        {name: "Shell Scripting"},
      ]},

      {name: "Data Visualization Tools", items: [
        {name: "Kibana",},
        {name: "Zeppelin",},
        {name: "Jupyter",},
        {name: "Chart.js",},
        {name: "Searchkit"}
      ]},

      {name: "Also have some experience with:", items: [
        {name: "Redis",},{name: "Flask",},{name: "Spring",},{name: "Electron",},{name: "GatsbyJS",},{name: "Firebase",},{name: "Matlab",},
      ]},
]

const Technologies = ({ title, children }: Props) => {
  return (
    <div className={styles["expertise-tech-list"]}>
      {techs.map(techType => {
        return (
          <div className={styles["tech-type-container"]} key={techType.name} id={`tech-type-container-for-${techType.name.replace(" ", "")}`}>
            <h2 className={styles["tech-type-name"]}>{techType.name}</h2>
            <div className={styles["tech-items-container"]}>
              {techType.items.map(item => {
                return (
                  <div className={styles["tech-item"]}>
                    <div className={styles["tech-item-name"]}>
                      {false && item.name}
                    </div>
                    <img className={styles["tech-item-logo"]} src={item.imageUrl} height="100px"/>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
      {otherTechs.map(techType => {
        return (
          <div className={styles["tech-type-container"]} key={techType.name} id={`tech-type-container-for-${techType.name.replace(" ", "")}`}>
            <h2 className={styles["tech-type-name"]}>{techType.name}</h2>
            <div className={styles["tech-items-container"]}>
              {techType.items.map(item => {
                return (
                  <div className={styles["tech-item"]}>
                    <div className={styles["tech-item-name"]}>
                      {item.name}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default Technologies;
