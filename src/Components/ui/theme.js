import { createMuiTheme } from '@material-ui/core'

export default createMuiTheme(
    {
        palette: {
            primary: {
                main: '#6200EE'
            },
        },
        typography: {
            h4: {
                fontWeight: '300',
                letterSpacing: '1px',
                padding: '1rem',
            },
            h6: {
                marginBottom: '0.5rem',
                fontSize: '1rem',
            }
        }
    }
)