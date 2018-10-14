// Formats facts from server for display
export default function formatResponse(res) {
  return res.data.replace(/&quot;/g, '"');
}