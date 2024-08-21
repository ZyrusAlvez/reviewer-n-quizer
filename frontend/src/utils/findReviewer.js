function findIndexUsingId(id, folders) {
  for (let i = 0; i < folders.length; i++) {
    if (folders[i]._id === id) {
      return i;
    }
  }
  return -1;
}

function findIndexUsingClassification(classification, folders) {
  for (let i = folders.length - 1; i >= 0; i--) {
    // Start from the last element because we're looking for the most updated one
    if (folders[i].classification === classification) {
      return i;
    }
  }
  return -1; 
}

export function findReviewerId(userFolder, folderId, classification) {
  console.log(userFolder)
  return userFolder.folders[findIndexUsingId(folderId, userFolder.folders)]
    .reviewers[
    findIndexUsingClassification(
      classification,
      userFolder.folders[findIndexUsingId(folderId, userFolder.folders)]
        .reviewers
    )
  ]._id;
}

export function findReviewerJson(userFolder, folderId, classification) {
  console.log(userFolder)
  return userFolder.folders[findIndexUsingId(folderId, userFolder.folders)]
    .reviewers[
    findIndexUsingClassification(
      classification,
      userFolder.folders[findIndexUsingId(folderId, userFolder.folders)]
        .reviewers
    )
  ].json;
}
