const svgFiles = [
  {
    file: 'astra.svg',
    url: '/docs/destinations/astra',
    description:
      'Astra is a cloud-native database-as-a-service built on Apache Cassandra.',
  },
  {
    file: 'azure-blob-storage.svg',
    url: '/docs/destinations/azure-blob-storage',
    description:
      'Azure Blob Storage is a Microsoft cloud service for storing large amounts of unstructured data.',
  },
  {
    file: 'datalake.svg',
    url: '/docs/destinations/aws-datalake',
    description:
      'AWS Data Lake is a centralized repository to store structured and unstructured data at any scale.',
  },
  {
    file: 'bigquery.svg',
    url: '/docs/destinations/bigquery',
    description:
      'BigQuery is a fully-managed, serverless data warehouse that enables scalable analysis over petabytes of data.',
  },
  {
    file: 'chroma.svg',
    url: '/docs/destinations/chroma',
    description:
      'Chroma is a vector database for building AI-powered applications with embeddings.',
  },
  {
    file: 'clickhouse.svg',
    url: '/docs/destinations/clickhouse',
    description:
      'ClickHouse is a fast open-source columnar database management system for real-time analytics.',
  },
  {
    file: 'convertkit.png',
    url: '/docs/destinations/convertkit',
    description:
      'Simple-to-Use and Efficient — Setting up automated email sequences is as easy as a few clicks saving you time and hassle.',
  },
  {
    file: 'convex.svg',
    url: '/docs/destinations/convex',
    description:
      'Convex is a backend platform that provides real-time data synchronization and serverless functions.',
  },
  {
    file: 'databricks.svg',
    url: '/docs/destinations/databricks',
    description:
      'Databricks is an Apache Spark-based analytics platform optimized for the cloud.',
  },
  {
    file: 'duckdb.svg',
    url: '/docs/destinations/duckdb',
    description: 'DuckDB is an in-process SQL OLAP database management system.',
  },
  {
    file: 'dynamodb.svg',
    url: '/docs/destinations/dynamodb',
    description:
      'Amazon DynamoDB is a key-value and document database that delivers single-digit millisecond performance.',
  },
  {
    file: 'elasticsearch.svg',
    url: '/docs/destinations/elasticsearch',
    description:
      'Elasticsearch is a distributed, RESTful search and analytics engine for all types of data.',
  },
  {
    file: 'firebolt.svg',
    url: '/docs/destinations/firebolt',
    description:
      'Firebolt is a cloud data warehouse for delivering sub-second analytics at scale.',
  },
  {
    file: 'firestore.svg',
    url: '/docs/destinations/firestore',
    description:
      'Firestore is a NoSQL document database built for automatic scaling, high performance, and ease of application development.',
  },
  {
    file: 'gcs.svg',
    url: '/docs/destinations/gcs',
    description:
      'Google Cloud Storage (GCS) is a scalable, secure, and durable object storage service for developers and enterprises.',
  },
  {
    file: 'gohighlevel.png',
    url: '/docs/destinations/gohighlevel',
    description:
      'Go High Level Includes Landing Pages, Websites, Emails, Text Messaging, CRM, And Much More.',
  },
  {
    file: 'google-sheets.svg',
    url: '/docs/destinations/google-sheets',
    description:
      'Google Sheets is an online spreadsheet app that lets users create and format spreadsheets and simultaneously work with other people.',
  },
  {
    file: 'hubspot.jpeg',
    url: '/docs/destinations/hubspot',
    description:
      'Simplify Your Processes — Generate leads, close deals, and create remarkable customer experiences.',
  },
  {
    file: 'iceberg.png',
    url: '/docs/destinations/iceberg',
    description:
      'Apache Iceberg is an open table format for huge analytic datasets.',
  },
  {
    file: 'kafka.svg',
    url: '/docs/destinations/kafka',
    description:
      'Apache Kafka is a distributed event streaming platform capable of handling trillions of events a day.',
  },
  {
    file: 'keap.png',
    url: '/docs/destinations/keap',
    description:
      '53% More Leads with Keap — Organize, track, and nurture your leads and customers with Keaps powerful CRM tools.',
  },
  {
    file: 'klaviyo.png',
    url: '/docs/destinations/klaviyo',
    description:
      'Intelligent email marketing and SMS platform with automation for faster, more efficient growth. Turn your customer data into hyper-personalized messages.',
  },
  {
    file: 'mailchimp.png',
    url: '/docs/destinations/mailchimp',
    description:
      'Use AI For Benchmarking, Creating Segments, Recommending Products & Generating Content. Convert Site Browsers, Cart Abandoners, & Cross-Sell Products to Discount Shoppers!',
  },
  {
    file: 'milvus.svg',
    url: '/docs/destinations/milvus',
    description:
      'Milvus is a vector database for scalable similarity search in AI applications.',
  },
  {
    file: 'mongodb.svg',
    url: '/docs/destinations/mongodb',
    description:
      'MongoDB is a source-available cross-platform document-oriented database program.',
  },
  {
    file: 'mssql.svg',
    url: '/docs/destinations/mssql',
    description:
      'Microsoft SQL Server is a relational database management system developed by Microsoft.',
  },
  {
    file: 'mysql.svg',
    url: '/docs/destinations/mysql',
    description:
      'MySQL is an open-source relational database management system based on SQL.',
  },
  {
    file: 'ontraport.png',
    url: '/docs/destinations/ontraport',
    description:
      'Website, CRM & Marketing in 1 — Easy set up with award-winning support. Trusted by thousands of businesses.',
  },
  {
    file: 'oracle.svg',
    url: '/docs/destinations/oracle',
    description:
      'Oracle Database is a multi-model database management system produced and marketed by Oracle Corporation.',
  },
  {
    file: 'pinecone.svg',
    url: '/docs/destinations/pinecone',
    description:
      'Pinecone is a vector database that provides indexing and querying of large datasets of vector embeddings.',
  },
  {
    file: 'postgres.svg',
    url: '/docs/destinations/postgres',
    description:
      'PostgreSQL is a powerful, open-source object-relational database system.',
  },
  {
    file: 'pubsub.svg',
    url: '/docs/destinations/pubsub',
    description:
      'Google Cloud Pub/Sub is a messaging service for exchanging event data among applications and services.',
  },
  {
    file: 'qdrant.svg',
    url: '/docs/destinations/qdrant',
    description:
      'Qdrant is a vector similarity search engine for finding similar entries in large-scale collections.',
  },
  {
    file: 'rabbitmq.svg',
    url: '/docs/destinations/rabbitmq',
    description:
      'RabbitMQ is an open-source message broker software that implements the Advanced Message Queuing Protocol (AMQP).',
  },
  {
    file: 'redis.svg',
    url: '/docs/destinations/redis',
    description:
      'Redis is an open-source, in-memory data structure store, used as a database, cache, and message broker.',
  },
  {
    file: 'redshift.svg',
    url: '/docs/destinations/redshift',
    description:
      'Amazon Redshift is a fully managed, petabyte-scale data warehouse service in the cloud.',
  },
  {
    file: 's3.svg',
    url: '/docs/destinations/s3',
    description:
      'Amazon S3 (Simple Storage Service) is an object storage service offering scalability, data availability, security, and performance.',
  },
  {
    file: 's3-glue.svg',
    url: '/docs/destinations/s3-glue',
    description:
      'AWS Glue is a fully managed extract, transform, and load (ETL) service that makes it easy to prepare and load data for analytics.',
  },
  {
    file: 'sftp-json.svg',
    url: '/docs/destinations/sftp-json',
    description:
      'SFTP is a secure file transfer protocol used to transfer files over a secure channel.',
  },
  {
    file: 'smartlead.png',
    url: '/docs/destinations/smartlead',
    description:
      'Fast, Easy and Reliable — Unlimited Warmups With Natural AI Conversations. Send cold emails that land in the inbox. Best Cold Email Tool in the Game.',
  },
  {
    file: 'snowflake.svg',
    url: '/docs/destinations/snowflake-cortex',
    description:
      'Snowflake Cortex is a cloud data platform that provides data warehousing, data lakes, and data sharing capabilities.',
  },
  {
    file: 'snowflake.svg',
    url: '/docs/destinations/snowflake',
    description:
      'Snowflake is a cloud data platform that provides data warehousing, data lakes, and data sharing capabilities.',
  },
  {
    file: 'starburst-galaxy.svg',
    url: '/docs/destinations/starburst-galaxy',
    description:
      'Starburst Galaxy is a fully-managed cloud-native analytics platform based on Trino (formerly PrestoSQL).',
  },
  {
    file: 'teradata.png',
    url: '/docs/destinations/teradata',
    description:
      'Teradata is a cloud data analytics platform that helps manage and analyze large amounts of data.',
  },
  {
    file: 'texthub.png',
    url: '/docs/destinations/texthub',
    description:
      'Broadcast a mass text/sms message with the #1 rated platform.',
  },
  {
    file: 'typesense.svg',
    url: '/docs/destinations/typesense',
    description:
      'Typesense is an open-source, typo-tolerant search engine optimized for developer happiness and performance.',
  },
  {
    file: 'vectara.svg',
    url: '/docs/destinations/vectara',
    description:
      'Vectara is an AI-powered neural search engine that provides semantic search capabilities.',
  },
  {
    file: 'weaviate.svg',
    url: '/docs/destinations/weaviate',
    description:
      'Weaviate is a vector search engine and database built to store, index, and search data objects.',
  },
  {
    file: 'webhook.png',
    url: '/docs/destinations/webhook',
    description:
      'A webhook is an HTTP-based callback function that allows lightweight, event-driven communication between 2 application programming.',
  },
  {
    file: 'yellowbrick.svg',
    url: '/docs/destinations/yellowbrick',
    description:
      'Yellowbrick is a modern data warehouse for high-performance SQL analytics on-premises and in the cloud.',
  },
];

export default svgFiles;
