// function buildTree(data) {
//   const map = new Map();
//   const tree = [];

//   data.forEach(item => {
//       map.set(item.id, item);
//   });

//   data.forEach(item => {
//       if (item.parentId === 0) {
//           item.children = [];
//           tree.push(item);
//       } else {
//           const parent = map.get(item.parentId);
//           if (!parent.children) {
//               parent.children = [];
//           }
//           parent.children.push(item);
//       }
//   });

//   return tree;
// }

interface TreeNode {
  id: number;
  title: string;
  icon?: null | string;
  description: string;
  parentId: number;
  children?: TreeNode[];
}

export function buildTree(data: TreeNode[]): TreeNode[] {
  const map = new Map<number, TreeNode>();
  const tree: TreeNode[] = [];

  data.forEach(item => {
    map.set(item.id, item);
  });

  data.forEach(item => {
    if (item.parentId === 0) {
      item.children = [];
      tree.push(item);
    } else {
      const parent = map.get(item.parentId);
      if (!parent || !parent.children) {
        if (!parent) {
          throw new Error(`Parent with ID ${item.parentId} not found`);
        }
        parent.children = [];
      }
      parent.children.push(item);
    }
  });

  return tree;
}