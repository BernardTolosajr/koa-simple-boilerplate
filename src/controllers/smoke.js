import cassandra from 'cassandra-driver'

export default () => {
  return {
    index: async (ctx, next) => {
      const client = new cassandra.Client({ contactPoints: ['localhost:9042'], localDataCenter: 'dc1', keyspace: 'testlogger' });
      const query = 'SELECT * FROM logsByDate WHERE name = ?';
      client.execute(query, [ 'foo' ])
        .then(result => {
          console.log(result.rows[0]);
        });

      ctx.response.body = "hello"
    }
  }
}
