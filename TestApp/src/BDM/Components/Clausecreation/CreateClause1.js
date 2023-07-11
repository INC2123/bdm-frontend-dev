import React,{ useState ,useEffect} from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TextEditor from './TextEditor';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },

  container: {
    display: "flex",
    flexDirection: "column",
    margin: "top 0px",
  },

  box:{
    marginRight:45

  },
  
  formControlM: {
    width: 300,
    height: 44,
    borderColor: '#646464',
  },

  signatureSelect: {
    width: 412,
    height: 44,
    borderColor: '#646464',
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
  },

  textEditor:{
    width:650,
    height:150,
    outlineColor: '#002D5D'
  },

  astric:{
    color:"#D83838"
  },
  
}));

function CreateClause1() {
  const classes = useStyles();
  // const CreateClause1 = () => {

  const categories = ['Hr', 'Appointment letter', 'Offer letter', 'category 4'];
  const tags = ['tag 1 ', 'tag 2 ', 'tag 3', 'tag 4'];

    const [category, setCategory] = useState('');
    const [clauseTitle, setClauseTitle] = useState(''); 
    const [description, setDescription] = useState('');
    const [tag, setTag] = useState('');
    const [signature, setSignature] = useState('');
    const [editorContent, setEditorContent] = useState('');

    const handleFormSubmit = (e) => {
      e.preventDefault();
    
      // Construct the payload object
      const payload = {
        name: clauseTitle,
        category: category,
        description: description,
        content: editorContent,
        signature: [signature],
        usedFor: [tag],
      };
    
      // Make the API call
      axios
        .post("https://cw-bdm.cfapps.eu10-004.hana.ondemand.com/api/clause", payload, {
          headers: {
            Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJJNExzTXlreEQ4czlXdFhOLUxaTXoxbDd3SmxfTmZmNGN5WkM5MEpZbklVIn0.eyJleHAiOjE2ODkwNjMzNTUsImlhdCI6MTY4OTA1NjE1NSwianRpIjoiNjRmMGY4OWQtMThkZS00NzVhLWIyYzktNTUxNTQ3ZjI4ZTZlIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5jaGVycnl3b3JrcHJvZHVjdHMuY29tL2F1dGgvcmVhbG1zL0RpZ2l0YWxBcHBsaWNhdGlvblN1aXRlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjBkOGYxMGYzLWY3ODYtNDU1OS1iMGQzLTdmMTUzMWM5MDJjNCIsInR5cCI6IkJlYXJlciIsImF6cCI6IndvcmthY2Nlc3MiLCJzZXNzaW9uX3N0YXRlIjoiMjQ3YTIwMTctY2RhNi00YmEyLTg3YzktNWZjNWFmMjUxOWFjIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL3dvcmthY2Nlc3MtZnJvbnRlbmQuYXp1cmV3ZWJzaXRlcy5uZXQiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlVTRVJfREVGSU5JVElPTl9LRVlfdXNlci1hZG1pbiIsImRlZmF1bHQtcm9sZXMtaW50ZWxsaWdlbnQgdGFzayBtYW5hZ2VtZW50IiwiaXRtLWFkbWluIiwiYWNjZXNzLWlkbSIsIml0bS1kZWZhdWx0Iiwib2ZmbGluZV9hY2Nlc3MiLCJhY2Nlc3MtdGFzayIsImFjY2Vzcy1tb2RlbGVyIiwidW1hX2F1dGhvcml6YXRpb24iLCJhY2Nlc3MtYWRtaW4iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJzaWQiOiIyNDdhMjAxNy1jZGE2LTRiYTItODdjOS01ZmM1YWYyNTE5YWMiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsIm5hbWUiOiJTeXN0ZW0gVXNlciIsInBpZCI6IlAwMDA5OTkiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ1c2VyIiwiZ2l2ZW5fbmFtZSI6IlN5c3RlbSIsImZhbWlseV9uYW1lIjoiVXNlciIsImVtYWlsIjoiZHVtbXkudG9rZW5AaW5jdHVyZS5jb20ifQ.kHwmLS-SjbxgeraqmCMFHadbPmCL2l8EvZWugL0dbFDv6f0UqYswXKIFYboaIiTXcD0sYnQJECykSkqJwfB7MZza16Dlz2ML0-JPdJ2sargiT7H5VUJj0hoHPcbRkhmDCL5Luehb50lUaXPReBpOjAkgR2wjeW0F_yHLj6oKUmL5F2dFoMxIEsxvLmlkX3fleeFMdbruv9eg2R9rHOLlWRfVCtBceYyCTFCcERSswasTQWIEMtfhvtUxM6eSrLHdqOdatgwA8jcK9GxtVpFsqUb0euIDxLMvU505B0VmMOQ_z60wrvp_tCEAJ80YUFNioxvDGPn-8TtklEmNy7Xo6A",
          },
        })
        .then((response) => {
          // Handle successful response
          console.log("API response:", response.data);
    
          // Reset the form fields
          setCategory("");
          setClauseTitle("");
          setDescription("");
          setTag("");
          setSignature("");
          setEditorContent("");
        })
        .catch((error) => {
          // Handle error
          console.log("API error:", error);
        });
    };
    

    return (
      <div className={classes.pageContainer}>
        <div className={classes.container}>
          <h2 className={classes.header}>Create Clause</h2>
          <form >
          <div style={{ display: "flex" }}>
           <Box
            className={classes.box}
            component="form"
            noValidate
            autoComplete="off"
            >
            <Typography >
                  Clause Title <span className={classes.astric}>*</span>
            </Typography>
            <TextField 
            id="outlined-basic" 
            variant="outlined"  
            size="small"
            style={{width:300}} 
            value={clauseTitle}
            onChange={(e) => setClauseTitle(e.target.value)}/>
           </Box>

            <FormControl
              className={classes.formControlM}
              // style={{ marginLeft: "87px" }}
              size="small"
            >
              <Typography className={classes.labelText}>
                Category <span className={classes.astric}>*</span>
              </Typography>
              <Select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <MenuItem value="">Select Category</MenuItem>
                {categories.map((categoryOption) => (
                  <MenuItem key={categoryOption} value={categoryOption}>
                    {categoryOption}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            </div>
  
              <div style={{ display: 'flex' }}>
               <Box
                 className={classes.box}
                 component="form"
                 noValidate
                 autoComplete="off"
                >
                <Typography>
                  Description <span className={classes.astric}>*</span>
                </Typography>
                <TextField id="outlined-basic" variant="outlined"  size="small" style={{width:300}} value={description}
                onChange={(e) => setDescription(e.target.value)}/>
               </Box>
  
               <FormControl
              className={classes.formControlM}
              size="small"
            >
              <Typography className={classes.labelText}>
                Tag <span className={classes.astric}>*</span>
              </Typography>
              <Select
                id="tags"
                value={tags}
                onChange={(e) => setTag(e.target.value)}
              >
                <MenuItem value="">Select Category</MenuItem>
                {tags.map((tagsOption) => (
                  <MenuItem key={tagsOption} value={tagsOption}>
                    {tagsOption}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
              </div>

            {/* <div> */}
            <div style={{ display: 'flex' }}>
            <Box
            component="form"
            noValidate
            autoComplete="off"
            >
              <Typography>Signature <span className={classes.astric}>*</span></Typography>
            <TextField 
            id="outlined-basic"
            variant="outlined" 
            size="small" 
            style={{width:300}}
            value={signature}
            onChange={(e) => setSignature(e.target.value)}/>
           </Box>
           </div>
          {/* </div> */}

          <div className={classes.textEditor} >
            <Typography className={classes.labelText}>Text Editor<span className={classes.astric}> *</span></Typography >
            < TextEditor onContentChange={setEditorContent}/>

          </div>
      

          <div className={classes.button} >
            <Button variant="outlined" style={{marginRight:10,color:'#002D5D',borderColor:'#002D5D',font:'Roboto',marginLeft:260}} size="small">Cancel</Button>
            <Button variant="outlined" style={{marginRight:10,color:'#002D5D',borderColor:'#002D5D'}} size="small">Save As Draft</Button>
            <Button variant="contained" onClick={handleFormSubmit} style={{textColor:'white',background:'#002D5D'}} size="small">Send For Approval</Button>
          </div>

          </form>
        </div>
      </div>
    );
  };
  
  export default CreateClause1;