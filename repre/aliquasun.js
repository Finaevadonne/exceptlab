// Function to compute contours of left and right subtrees up to the highest common level
function computeContours(node) {
    if (!node) return;

    // Compute contour of the left subtree
    let leftContour = computeLeftContour(node.left);

    // Compute contour of the right subtree
    let rightContour = computeRightContour(node.right);

    // Combine the contours up to the highest common level
    let highestCommonLevel = Math.min(leftContour.length, rightContour.length);
    let combinedContours = [];

    for (let level = 0; level < highestCommonLevel; level++) {
        combinedContours[level] = {
            left: leftContour[level],
            right: rightContour[level]
        };
    }

    return combinedContours;
}

// Helper function to compute the contour of the left subtree
function computeLeftContour(node) {
    let contour = [];

    function traverse(node, level) {
        if (!node) return;

        if (!contour[level]) {
            contour[level] = node.value;
        }

        traverse(node.left, level + 1);
        traverse(node.right, level + 1);
    }

    traverse(node, 0);
    return contour;
}

// Helper function to compute the contour of the right subtree
function computeRightContour(node) {
    let contour = [];

    function traverse(node, level) {
        if (!node) return;

        if (!contour[level]) {
            contour[level] = node.value;
        }

        traverse(node.right, level + 1);
        traverse(node.left, level + 1);
    }

    traverse(node, 0);
    return contour;
}
