# Codebase Restructuring

This document describes the restructuring changes made to the SWYF codebase to improve organization and maintainability.

## Changes Made

1. **Created a clear directory structure**:
   - `/frontend`: Contains the React application (formerly "new pages")
   - `/services`: Contains backend services
     - `/services/virtual-tryon`: Flask service for virtual try-on
     - `/services/skin-tone`: Python service for skin tone analysis
   - `/assets`: Shared image assets
   - `/docs`: Project documentation

2. **Improved naming consistency**:
   - Renamed directories to follow consistent naming convention (kebab-case)
   - Updated file organization to separate services clearly

3. **Updated cross-references**:
   - Modified import paths in Flask app to reference the new skin-tone service location
   - Updated asset references in the README.md

4. **Added service dependencies**:
   - Created requirements.txt for the virtual-tryon service

## Benefits

- **Improved maintainability**: Clear separation of frontend and backend services
- **Better organization**: Logical grouping of related components
- **Enhanced developer experience**: Easier to understand project structure
- **Simplified deployment**: Clearer dependencies for each service

## Future Improvements

- Consider creating a Docker setup for containerized deployment
- Add more detailed documentation for each service
- Implement CI/CD pipelines for automated testing and deployment 