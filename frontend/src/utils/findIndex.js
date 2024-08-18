export function findIndexUsingId(id, folders) {
  for (let i = 0; i < folders.length; i++) {
    if (folders[i]._id === id) {
      return i;  // Return the index if _id matches
    }
  }
  return -1;
}

export function findIndexUsingClassification(classification, folders) {
  for (let i = folders.length - 1; i >= 0; i--) {  // Start from the last element
    if (folders[i].classification === classification) {
      return i;  // Return the index if classification matches
    }
  }
  return -1;  // Return -1 if no match is found
}


