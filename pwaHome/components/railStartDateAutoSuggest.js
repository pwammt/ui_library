import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import autoBind from 'react-autobind';
import '../css/autosuggest.css';


const datelist = [
	{ 
  datelist: [
  		
        {
          day: "Day Before Yesterday",
          date: "Friday, 28 Jul 18",
			  
        },
        
        
        {
          day: "Yesterday",
          date: "Saturday, 29 Jul 18",
		
        },
        {
          day: "Today",
          date: "Sunday, 30 Jul 18",
		
        },
        {
          day: "Tomorrow",
          date: "Monday, 31 Jul 18",
		
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

  return datelist
    .map(section => {
      return {
        title: null,
        datelist: section.datelist.filter(day => regex.test(day.day))
      };
    })
    .filter(section => section.datelist.length > 0);
}

function shouldRenderSuggestions() {
  return true;
}

function getSuggestionValue(suggestion) {
  return suggestion.day;
}

function renderSuggestion(suggestion) {
  return (
    <div className="appendBottom20 makeFlex hrtlCenter">
	  <div className="calc60">
    <p className="font16 appendBottom8">{suggestion.day}</p>
	<p className="font14 grey">  {suggestion.date}</p>
	  </div>
	 
	  </div>
  );
}

function renderSectionTitle(section) {
  return null
}

function getSectionSuggestions(section) {
  return section.datelist;
}


class RailStartDateAutoSuggest extends React.Component {
  constructor(props) {
    super(props);
	  autoBind(this);
	 
    this.state = {
      value: '',
      suggestions: datelist
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
		onChange(suggestion.day, suggestion.date);
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

export default RailStartDateAutoSuggest;