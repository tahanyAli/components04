import React from "react";
import Button from "./Button";
import { GoTrashcan } from "react-icons/go";
import ExpandablePanel from "./ExpandablePanel";
import {useRemoveAlbumMutation} from '../store';
function AlbumsListItem({ album }) {
    const [removeAlbum, results] = useRemoveAlbumMutation();
    const handleRemoveAlbum = () => {
        removeAlbum(album);
    };
  const header = (
    <>
      <Button className="mr-2" loading={results.isLoading} onClick={handleRemoveAlbum}>
        <GoTrashcan />
      </Button>
      {album.title}
    </>
  );
  return (
    <ExpandablePanel key={album.is} header={header}>
      List of photos in the album
    </ExpandablePanel>
  );
}
export default AlbumsListItem;
