# Learn how to use React.js to build a Web App with RESTful service - search example

Hi, Welcome to my project.
Here, you will find example code to create a web app, using the following frameworks

* NodeJS as the server
* React Javascript library


Our Web app will call a simple REST service to manage products

* create a simple object ( product)
* list products
* update a product
* delete a product

The REST service is another project.  The service is deployed here 
 [Live service](https://nreactdemo-search.glitch.me/).
 



## Online live demo

[Github pages](https://prawinn555.github.io/reactdemo-search/)



## Code

From [Github](https://github.com/prawinn555/reactdemo-search/)


## Installation

```
npm i
npm start

```


## Deployment

```
npm run build

gh-pages -d build

```

(must install gh-pages before)





## Understand the code


### Bootstrapping and rendering

* The bootstap is index.js

* The script index.js will generate the HTML page from index.html.
The module App is call, and the content is put in the root element in index.html.

```
ReactDOM.render(<App />, document.getElementById("root"));
```
* The module App (App.js) renders the following content.

```
      <div>
        <Header />
        <SearchInput textChange={this.handleSearchChange} />
        <DataResults listData={this.state.filteredData} />
      </div>
```

* The related modules ( SearchInput & DataResults) are invoked to render their contents.


* The SearchInput module renders its content as follows 

```
      <div className="component-search-input">
        <div>
          <input onChange={this.handleChange} />
        </div>
      </div>
```


* The DataResults module renders its content as follows 

```
      <div className="component-data-results">
        {this.props.listData.map(dataItem => (
          <DataResultRow
            key={dataItem.title}
            symbol={dataItem.symbol}
            title={dataItem.title}
          />
        ))}
      </div>
```


* The DataResultRow module renders each single row.

```
      <div
        className="component-data-result-row copy-to-clipboard"
        data-clipboard-text={this.props.symbol}
      >
        <img alt={this.props.title} src={src} />
        <span className="title">{this.props.title}</span>
        <span className="info">Click to copy data</span>
      </div>
```



### Initialisation


* In App.js, data is prepared by {this.state.filteredData}, 
the result is sent to DataResults.
( the change on the data will provoke re-rendering).




```
  handleSearchChange = event => {
    this.setState({
      filteredData: filterData(event.target.value, 20)
    });
  };

  render() {
    return (
      <div>
        <Header />
        <SearchInput textChange={this.handleSearchChange} />
        <DataResults listData={this.state.filteredData} />
      </div>
    );
  }
```



### Change events



* In App.js, the 'textChange' function will execute on change events. The source is {


```
  handleSearchChange = event => {
    this.setState({
      filteredData: filterData(event.target.value, 20)
    });
  };

  render() {
    return (
      <div>
        <Header />
        <SearchInput textChange={this.handleSearchChange} />
        <DataResults listData={this.state.filteredData} />
      </div>
    );
  }
```




## Acknowledgments

* All framework contributors

