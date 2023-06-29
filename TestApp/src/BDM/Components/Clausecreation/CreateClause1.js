import React,{ useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
// import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TextEditor from './TextEditor';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import DatePicker from './DatePicker';
import { Typography } from '@mui/material';
import { convertToRaw } from 'draft-js';

// import '@fontsource/roboto/400.css';
// import { Styled } from '@emotion/styled';
// import { useTranslation } from 'react-i18next';

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };


const useStyles = makeStyles((theme) => ({
  pageContainer: {
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 916,
    height: '100vh',
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    marginLeft:900,
    maxWidth: 916,
    maxHeight: 432,
    margin: 'top 0px',

  },
  header: {
    "& .muiheader-root":{
    marginTop: '1rem',
    marginBottom: '2rem',
    font:'Roboto'
    }
  },
  clauseTitle: {
    width: 412,
    height: 44,
    borderColor: '#646464',
    border:'1px',
    marginRight: 20,

  },
  
  formControlM: {
    width: 412,
    height: 44,
    borderColor: '#646464',marginBotttom:'2rem'
  },

  descriptionTextField: {
    width: 415,
    height: 44,
    maxWidth: '100%',
    borderColor: '#646464',
    marginTop:'3rem',
    marginBottom: '3rem',
  },
  signatureSelect: {
    width: 412,
    height: 44,
    borderColor: '#646464',
  },
  
  sendApprovalButton: {
    backgroundColor: '#646464',
    color: 'white',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 14,
    flex: 'none',
    order: 0,
    flexGrow: 0,
  },
  labelTextSpan: {
    color: '#D83838',
  },
  labelText: {
    "& .muitypography-root":{
    width: 80,
    height: 16,
    fontFamily: 'Roboto',
    fontWeight: 400,
    fontSize: 14,
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '0.0025em',
    color: '#1D1D11',
    },
  },
  button:{
    marginTop:'7rem',
    marginLeft:445,

  },

  textEditor:{
    width:916,
    height:230,
    marginTop:'3rem',
    overflowY:"scroll",
    overflowX:'hidden',
    outlineColor: '#002D5D'
  },

  astric:{
    color:"#D83838"
  },
  // date:{
  //   "& .muiDatePicker-root":{
  //      width:'251px',
  //   }
  // },
  
}));

function CreateClause1() {
  const classes = useStyles();

  const clauseTitles = ['company policies', 'compensation', 'personal details', 'Clause D'];
  const categories = ['Hr', 'Appointment letter', 'Offer letter', 'category 4'];
  const tags = ['tag 1 ', 'tag 2 ', 'tag 3', 'tag 4'];
  const signatures = ['1', '2', '3'];
  const [selectedDate, setSelectedDate] = useState('');
  // const contentState = editorState.getCurrentContent();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [tag, setTag] = useState('');
  const [signature, setSignature] = useState('');
  const [description, setDescription] = useState('');

  const [textEditorContent, setTextEditorContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      title,
      category,
      description,
      tag,
      signature,
      textEditorContent,
      // textEditorContent: textEditorContent.getCurrentContent().getPlainText('\u0001'),
    };
    console.log('Payload:', payload);
    // Reset form fields
    setTitle('');
    setCategory('');
    setTag('');
    setSignature('');
    setDescription('');
    setTextEditorContent('');
  };

  // const handleDateChange = (event) => {
  //   setSelectedDate(event.target.value);
  // };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleTagChange = (event) => {
    setTag(event.target.value);
  };

  const handleSignatureChange = (event) => {
    setSignature(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div className={classes.pageContainer}>
      <div className={classes.container}>
        <h1 className={classes.header}>Create Clause</h1>
        <form onSubmit={handleSubmit} >
          <div>
          <FormControl className={classes.clauseTitle}>
            <Typography className={classes.labelText}>Clause Title<span className={classes.astric}>*</span></Typography>
            <Select id="title" value={title} onChange={handleTitleChange}>
              <MenuItem value="">Select Clause Title</MenuItem>
              {clauseTitles.map((titleOption) => (
                <MenuItem key={titleOption} value={titleOption}>
                  {titleOption}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl className={classes.formControlM} style={{ marginLeft: '87px' }}>
            <Typography className={classes.labelText}>Category <span className={classes.astric}>*</span></Typography >
            <Select id="category" value={category} onChange={handleCategoryChange}>
              <MenuItem value="">Select Category</MenuItem>
              {categories.map((categoryOption) => (
                <MenuItem key={categoryOption} value={categoryOption}>
                  {categoryOption}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          </div>

          <div>
            <div style={{ display: 'flex' }}>
              <Box className={classes.descriptionTextField}>
              <Typography className={classes.labelText}>Description</Typography>
          <TextField id="description" value={description} onChange={handleDescriptionChange} multiline className={classes.descriptionTextField}/>
              </Box>

              <FormControl className={classes.formControlM} style={{ marginLeft: '85px' ,marginTop:'3rem'}}>
                <Typography className={classes.labelText}>Tag <span className={classes.astric}>*</span></Typography >
                <Select id="tag" value={tag} onChange={handleTagChange}>
                  <MenuItem value="">Select Tag</MenuItem>
                  {tags.map((tagOption) => (
                    <MenuItem key={tagOption} value={tagOption}>
                      {tagOption}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>

          <div>
            <div style={{ display: 'flex' }}>
            <FormControl className={classes.formControl + ' ' + classes.signatureSelect}>
              <Typography className={classes.labelText}>Signature <span className={classes.astric}> *</span></Typography >
              <Select id="signature" value={signature} onChange={handleSignatureChange}>
                <MenuItem value="">Select Signature</MenuItem>
                {signatures.map((signatureOption) => (
                  <MenuItem key={signatureOption} value={signatureOption}>
                    {signatureOption}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            

            {/* <div >
              <DatePicker/>
             </div> */}

             </div>
   
          </div>

          <div className={classes.textEditor} >
            <Typography className={classes.labelText}>Text Editor<span className={classes.astric}> *</span></Typography >
            {/* <TextEditor
              value={textEditorContent}
              // onChange={handleTextEditorChange}
            /> */}
            <TextEditor onContentChange={setTextEditorContent} />

          </div>
      

          <div className={classes.button} >
            <Button variant="outlined" style={{marginRight:20,color:'#002D5D',borderColor:'#002D5D',font:'Roboto'}} >Cancel</Button>
            <Button variant="outlined" style={{marginRight:20,color:'#002D5D',borderColor:'#002D5D'}}>Save As Draft</Button>
            <Button variant="contained"  type="submit" style={{textColor:'white',background:'#002D5D'}}>Send For Approval</Button>
          </div>
          </form>


        </div>

        
      </div>
  
  );
}

export default CreateClause1;
