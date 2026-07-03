if (!(Test-Path "ROADMAP.md")) {
@"
# TaxonomyExplorer Roadmap

## Phase 1
Taxonomy constitution, seed dictionaries, and static Explorer MVP.

## Phase 2
Dictionary governance and contribution process.

## Phase 3
Data-driven rule tables and validation schemas.

## Phase 4
Expanded material-handling product coverage.

## Phase 5
Community proposals and industry mapping libraries.

## Phase 6
Formal versioned releases and public adoption workflow.
"@ | Set-Content "ROADMAP.md"
}