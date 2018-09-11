const playOrder = {
  1: [
    [1,1]
  ],
  2: [
    [1,2]
  ],
  3: [
    [1,3], [2,3], [1,2]
  ],
  4: [
    [1,4], [2,3], [1,3], [2,4], [1,2], [3,4]
  ],
  5: [
    [1,5], [2,3], [1,4], [2,5], [1,3], [2,4], [3,5], [4,5], [1,2], [3,4]
  ],
  6: [
    [1,6], [2,5], [3,4], [1,5], [2,6], [4,5], [1,3], [2,4], [5,6], [2,3], [1,4], [3,5], [4,6], [1,2], [3,6]
  ],
  7: [
    [1,7], [2,6], [3,5], [4,7], [1,6], [2,5], [3,7], [1,4], [2,7], [3,6], [1,5], [2,4], [6,7], [3,4], [5,6], [1,2], [5,7], [4,6], [2,3], [4,5], [1,3]
  ]
};

export default playOrder;