function nextFolderBlocksId(folderBlocks) {
  const Id = todos.reduce(
    (Id, folderBlocks) => Math.max(folderBlocks.id, Id),
    -1
  );
  return Id + 1;
}

const initialState = {
  folderBlocks: [
    {
      name: "Welcome to Dekked",
      type: "folder",
      id: 0,
      iconColour: "#2C2C31",
      isOpen: true,
      binders: [
        {
          name: "Getting Started",
          type: "binder",
          id: 1,
          iconColour: "#2C2C31",
          isOpen: true,
          studySets: [
            {
              name: "Tutorial",
              type: "studySet",
              id: 2,
              iconColour: "#2C2C31",
              tab: "notes",
            },
          ],
        },
      ],
    },
  ],
};

const folderBlocksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "folderBlocks/addFolder":
      return {
        folderBlocks: [
          ...state.folderBlocks,
          {
            name: "",
            type: "folder",
            id: nextFolderBlocksId(state.folderBlocks),
            iconColour: "#2C2C31",
            isOpen: false,
            binders: [],
          },
        ],
      };
    case "folderBlocks/addBinder":
      return {
        ...state, 
        folderBlocks:state.folderBlocks.map(folderBlock=>{
            if (folderBlocks)
        })
            
            
        }
         
        ],
      };

    default:
      return state;
  }
};
