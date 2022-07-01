function handler(req, res) {
  const {method} = req
  
  if (method === 'GET') {
    res.status(200).json({message: 'GET!'})
  }
  
  if (method === 'POST') {
    res.status(200).json({message: 'POST!'})
  }
  res.status(404).json({message: 'not found'})
}

export default handler