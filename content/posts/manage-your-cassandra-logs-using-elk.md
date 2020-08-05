---
title: "Manage your Cassandra Logs using the ELK Stack"
template: "post"
draft: false
slug: "manage-your-cassandra-logs-using-elk"
priority: 7
tags:
  - "logs"
  - "filebeat"
  - "elasticsearch"
  - "logstash"
  - "kibana"
  - "cassandra"
  - "data visualization"
description: Distributed apps quickly get to the place where trying to debug using tail -f becomes untenable. However, ignoring your logs isn't an option: to quote Jay Kreps' book <i>I Heart Logs</i>, "the humble log is an abstraction that lies at the heart of many systems, from NoSQL databases to cryptocurrencies. Even though most engineers don’t think much about them,...logs are worthy of your attention." The ELK Stack (Elasticsearch, Logstash, and Kibana) is a go-to tool for managing your logs and making them help you rather than just taking up hard drive space. Unfortunately, it does not yet have out-of-the-box log processing or dashboards for Cassandra. Check out a way to extract meaningful information from your Cassandra logs here.
indexImage: "/media/project-images/cassandra-in-kibana/kibana-discover-view-TOKENIZED.png"
# The front and server actually did a lot of the direct communication with social media platforms using passport, but really it was stored on our end using our sails backend
githubRepo: "cassandra-in-kibana"
category: "cassandra-in-kibana"
---