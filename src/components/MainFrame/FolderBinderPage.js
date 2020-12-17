import React from 'react'

function FolderBinderPage({folderBlocks}) {
    return (
        <div>
            {
                folderBlocks[location.state.folderIndex].binders.map(
              (item, index) => {
                return <Card />;
              }
            )
            }
            
        </div>
    )
}

export default FolderBinderPage
