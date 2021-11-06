import React from "react";
import Items from "./items";
import Api from "../../api/api";
import Pagination from "./pagination";

/* IMPORT COMPONENT STYLE */
import { CirularWrapper, InputSearch } from "./style";

/* IMPORT DO MATERIAL */
import { CircularProgress, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

export default function GetItems() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [item, setItem] = React.useState([]);
  const postsPerPage = 32;

  const [loading, setLoading] = React.useState(true);

  /* VARIAVEIS PARA PAGINAÇÃO */
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = item.slice(indexOfFirstPost, indexOfLastPost);

  const [find, setFind] = React.useState(item[0]);

  /* FUNÇÃO ASYNC PARA FETCH DOS DADOS UTILIZANDO O AXIOS */
  async function fetchCountries() {
    setLoading(true);
    await Api.get(`countries`).then((res) => {
      const item = res.data;
      setItem(item);
    });
    setLoading(false);
  }

  /* HOOK DE EFEITO NA FUNÇÃO DE CHAMADA A API */
  React.useEffect(() => {
    fetchCountries();
  }, []);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const editSearchTerm = (e) => {
    setItem({ item: e.target.value });
  };

  const onSearch = (e) => {
    item.filter((name) => name.toLowerCase().inludes(editSearchTerm.toLo));
  };

  function handleText(e) {
    const proc = item.find((a) => a.country === e.target.value);
    console.log(item[0].country.length);
    if (proc) {
      setFind(proc);
    } else {
      setFind(undefined);
    }
  }

  return (
    <>
      {/* COMPONENTE LOADING */}

      {loading && (
        <CirularWrapper>
          <CircularProgress color="primary" thickness={6} size={50} />
        </CirularWrapper>
      )}

      <input type="text" />

      {/* COMPONENTE DE ITEMS E PAGINAÇÃO */}

  
        <Autocomplete
          id="combo-box-demo"
          options={item}
          getOptionLabel={(option) => option.country}
          style={{ width: 400 }}
          onChange={(event, newValue) => {
            console.log(event);
            setFind(newValue);
          }}
          renderInput={(item) => (
            <TextField
              {...item}
              label="Combo box"
              onChange={handleText}
              variant="outlined"
            />
          )}
        />


       <Items data={item} item={currentPosts} find={find} setFind={setFind}/>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={item.length}
        paginate={paginate}
      />
    </>
  );
}
