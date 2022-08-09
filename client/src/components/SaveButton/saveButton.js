import {
  SaveButton,
  Toolbar,
  Edit,
  SimpleForm,
  useNotify,
  useRedirect,
} from "react-admin";

const PostSaveButton = (props) => {
  const notify = useNotify();
  const redirect = useRedirect();
  const onSuccess = (response) => {
    notify(`Post "${response.data.title}" saved!`);
    redirect("/posts");
  };
  return <SaveButton {...props} mutationOptions />;
};

const PostEditToolbar = () => (
  <Toolbar>
    <PostSaveButton />
    <DeleteButton />
  </Toolbar>
);

const PostEdit = () => (
  <Edit>
    <SimpleForm toolbar={<PostEditToolbar />}>...</SimpleForm>
  </Edit>
);
