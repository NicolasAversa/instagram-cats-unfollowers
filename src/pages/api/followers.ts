import axios from 'axios';
import Cors from 'cors';
import initMiddleware from 'lib/initMiddleware';

// Initialize the cors middleware
const cors = initMiddleware(
  Cors({
    methods: ['GET'],
  }),
);

export default async function handler(req, res) {
  if (req.method === 'GET') {
    await cors(req, res);
    const { data } = await axios.get(
      'https://www.instagram.com/nicolas_aversa/?__a=1',
    );

    res.status(200).send(data);
  }
}
