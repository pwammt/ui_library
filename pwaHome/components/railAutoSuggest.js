import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import autoBind from 'react-autobind';
import '../css/autosuggest.css';


const raillist = [
	{ title: 'RECENT SEARCHES',
  raillist: [
  		
        {
          railName: "Mumbai Bandra Terminus Express",
          railNo: "19020",
        },
        
        
        {
          railName: "Mumbai Bandra Terminus Express",
          railNo: "19020",
        },
        {
          railName: "Mumbai Bandra Terminus Express",
          railNo: "19020",
        },
        
        {
          railName: "Mumbai Bandra Terminus Express",
          railNo: "19020",
        }
	
		]
	},
	{ title: 'POPULAR CITIES ',
  raillist: [
  		{
        railName: "Mumbai Bandra Terminus Express",
        railNo: "19020",
        },
        {
          railName: "Mumbai Bandra Terminus Express",
          railNo: "19020",
        },
        
        {
          railName: "Mumbai Bandra Terminus Express",
          railNo: "19020",
        },
        {
          railName: "Mumbai Bandra Terminus Express",
          railNo: "19020",
        },
        
        {
          railName: "Mumbai Bandra Terminus Express",
          railNo: "19020",
        }
	
		]
	}
];

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());
  
  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');

  return raillist
    .map(section => {
      return {
        title: section.title,
        raillist: section.raillist.filter(railName => regex.test(railName.railName))
      };
    })
    .filter(section => section.raillist.length > 0);
}

function shouldRenderSuggestions() {
  return true;
}

function getSuggestionValue(suggestion) {
  return suggestion.railName;
}

function renderSuggestion(suggestion) {
  return (
    <div className="appendBottom20 makeFlex hrtlCenter">
	  <div className="calc60">
    <p className="font16 appendBottom8">{suggestion.railName}</p>
	  <p className="font14 grey">  {suggestion.railNo}</p>
	  </div>
	 
	  </div>
  );
}

function renderSectionTitle(section) {
  return (
    <p className="font12 latoBlack black appendBottom20">{section.title}</p>
  );
}

function getSectionSuggestions(section) {
  return section.raillist;
}


class AutoSuggest extends React.Component {
  constructor(props) {
    super(props);
	  autoBind(this);
	 
    this.state = {
      value: '',
      suggestions: raillist
    };    
  }

  onChange(_, { newValue }){
    
    this.setState({
      value: newValue
    });

  };
  
  onSuggestionsFetchRequested({ value }){
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested(){
    this.setState({
      suggestions: []
    });
  };
	
	onSuggestionSelected(event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }){
		const { onChange, overlayClose } = this.props;
		onChange(suggestion.railName, suggestion.railNo);
		overlayClose();
    };


  render() {
    const { placeholder } = this.props;
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder,
      value,
      onChange: this.onChange
    };
    
    return (
		<div>	
		
      <Autosuggest  
          multiSection={true}
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          onSuggestionSelected={this.onSuggestionSelected}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          renderSectionTitle={renderSectionTitle}
          getSectionSuggestions={getSectionSuggestions}
          shouldRenderSuggestions={shouldRenderSuggestions}
          inputProps={inputProps}
          focusInputOnSuggestionClick={false}
          alwaysRenderSuggestions={true}
      />
		</div>
    );
  }
}

export default AutoSuggest;