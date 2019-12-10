# Elastic Search Queries

### Match All
```json
{
    "query": {
        "match_all": {}
    }
}
```

### Match a certain field
```json
{
    "query": {
        "match" : {
            "FIELD_NAME" : {
                "query" : "this is a test"
            }
        }
    }
}
```

### Match even if one the words match
```json
{
    "query": {
        "match" : {
            "message" : {
                "query" : "this is a test",
                "operator" : "or"//Optional - By default operator is or
            }
        }
    }
}
``` 

### Match only if all the words are there
```json
{
    "query": {
        "match" : {
            "message" : {
                "query" : "this is a test",
                "operator" : "and"
            }
        }
    }
}
```

### Multi Match Query - Same value
```json
{
  "query": {
    "multi_match" : {
      "query":    "this is a test", 
      "fields": [ "subject", "message" ] 
    }
  }
}
```

Field can be specified with wildcards. Eg
```json
{
  "query": {
    "multi_match" : {
      "query":    "Will Smith",
      "fields": [ "title", "*_name" ] 
    }
  }
}
```

Query the title, first_name and last_name fields.


### Match Multiple Fields with different value
```json
{
  "query": {
    "bool": {
      "must": [
        { "match": { "title":          "quick brown fox" }},
        { "match": { "title.original": "quick brown fox" }},
        { "match": { "title.shingles": "quick brown fox" }}
      ]
    }
  }
}
```

The difference in using multimatch and this is that when we need to match a single value across different fields then we go for multimatch and when we need to match different values across different we use the above approach.

### Match Phrase
```json
{
    "query": {
        "match_phrase" : {
            "message" : "this is a test"
        }
    }
}
```

### Query String

##### Match Single Field
```json
{
  "query" : {
    "query_string" : {
      "query" : "kimchy\\!",
      "fields"  : ["user"]
    }
  }
}
```
##### Match Multiple Fileds
```json
{
    "query": {
        "query_string" : {
            "fields" : ["content", "name"],
            "query" : "some query",
            "default_operator": "and"//Optional - defaults to OR
        }
    }
}
```



## Higher Order Elastic Search Queries

### Common Terms Query
For more info please check: [ES Common Terms Query](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-common-terms-query.html)
```json
{
    "query": {
        "common": {
            "body": {
                "query": "this is bonsai cool",
                "cutoff_frequency": 0.001
            }
        }
    }
}
```


