// to get latest tag list: 
// 1) go to http://localhost:8000/tags
// 2) copy all new tags here
// 3) run this in vim to get right format
//    :%s/  \([a-z. ]\+\).*/"\1": {friendlyName: "", description: ""},
// 4) fill out the details
const tagMetadata = {
  "airflow": {friendlyName: "Airflow", description: ""},
  "batch jobs": {friendlyName: "Batch ETL", description: ""},
  "cassandra": {friendlyName: "Cassandra DB", description: ""},
  "chart.js": {friendlyName: "Chart.js", description: ""},
  "data streaming": {friendlyName: "Data Streaming", description: ""},
  "data visualization": {friendlyName: "Data Visualization", description: ""},
  "devops": {friendlyName: "Dev Ops", description: ""},
  "docker": {friendlyName: "Docker", description: ""},
  "dse": {friendlyName: "Datastax Enterprise", description: ""},
  "dse-graph": {friendlyName: "DSE Graph", description: ""},
  "elassandra": {friendlyName: "Elassandra", description: ""},
  "elasticsearch": {friendlyName: "Elasticsearch", description: ""},
  "external apis": {friendlyName: "External APIs", description: ""},
  "filebeat": {friendlyName: "Filebeat", description: ""},
  "flask": {friendlyName: "Flask", description: ""},
  "gatsby": {friendlyName: "Gatsby", description: ""},
  "google analytics": {friendlyName: "Google Analytics", description: ""},
  "graph": {friendlyName: "Graph", description: ""},
  "gremlin": {friendlyName: "Gremlin", description: ""},
  "java": {friendlyName: "Java", description: ""},
  "janus graph": {friendlyName: "Janus Graph", description: ""},
  "kafka": {friendlyName: "Kafka", description: ""},
  "kibana": {friendlyName: "Kibana", description: ""},
  "logs": {friendlyName: "Logs", description: ""},
  "logstash": {friendlyName: "Logstash", description: ""},
  "matlab": {friendlyName: "Matlab", description: ""},
  "nodejs": {friendlyName: "NodeJS", description: ""},
  "pyspark": {friendlyName: "PySpark", description: ""},
  "python": {friendlyName: "Python", description: ""},
  "react": {friendlyName: "React", description: ""},
  "scala": {friendlyName: "Scala", description: ""},
  "searchkit": {friendlyName: "Searchkit", description: ""},
  "shell scripting": {friendlyName: "Shell Scripting", description: ""},
  "spark": {friendlyName: "Spark", description: ""},
  "vega": {friendlyName: "Vega", description: ""},
  "zeppelin": {friendlyName: "Zeppelin", description: ""},
}

export default tagMetadata
