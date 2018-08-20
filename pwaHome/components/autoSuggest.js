import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import autoBind from 'react-autobind';
import '../css/autosuggest.css';


const citieslist = [
	{ title: 'RECENT SEARCHES',
    citieslist: [
  		
        {
          city: "New Delhi",
          country: "India",
			iata:"DEL"
        },
        
        
        {
          city: "Bangalore",
          country: "India",
			iata:"BLR"
        },
        {
          city: "Goa",
          country: "India",
			iata:"GOI"
        },
        
        {
          city: "London",
          country: "England",
			iata:"LDN"
        }
	
		]
	},
	{ title: 'POPULAR CITIES ',
    citieslist: [
  		{
          city: "Jaipur",
          country: "India",
			iata:"JAI"
        },
        {
          city: "New Delhi",
          country: "India",
			iata:"DEL"
        },
        
        {
          city: "Bangalore",
          country: "India",
			iata:"BLR"
        },
        {
          city: "Goa",
          country: "India",
			iata:"GOI"
        },
        
        {
          city: "Mumbai",
          country: "India",
			iata:"BOM"
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

  return citieslist
    .map(section => {
      return {
        title: section.title,
        citieslist: section.citieslist.filter(city => regex.test(city.city))
      };
    })
    .filter(section => section.citieslist.length > 0);
}

function shouldRenderSuggestions() {
  return true;
}

function getSuggestionValue(suggestion) {
  return suggestion.city;
}

function renderSuggestion(suggestion) {
  return (
    <div className="appendBottom20 makeFlex hrtlCenter">
	  <div className="calc60">
    <p className="font16 appendBottom8">{suggestion.city}</p>
	<p className="font14 grey">  {suggestion.country}</p>
	  </div>
	  <div className="pushRight font14 lightGreyText latoBold">
	   {suggestion.iata}
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
  return section.citieslist;
}


class AutoSuggest extends React.Component {
  constructor(props) {
    super(props);
	  autoBind(this);
	 
    this.state = {
      value: '',
      suggestions: citieslist
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
		onChange(suggestion.city, suggestion.country);
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