export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name } = req.body;

    // Example: Log name to console (you can integrate a database here)
    console.log("Name received:", name);

    res.status(200).json({ message: 'Name saved successfully' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
