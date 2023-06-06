/**
 * --------------------------------------------
 *              BASIC
 * --------------------------------------------
 * 
 * 1. Don't show the link to them who should not see it
 * 2. Only show to the person / types of user who should see it
 * 3. Do not alow to visit the link by typing url
 * 4. use AdminRoute that will check whether the user is admin or not. 
 * If not admin then redirect to any other page. You could logout the user and send then to login page as well.  
 * 
 * ----------------------------------------------
 * TO SEND DATA
 * ----------------------------------------------
 * 1. verify jwt token ( send authorization token in the header to the server)
 * if possible use axios to send jwt token by intercepting the request
 * 2. if it is an admin activity. Make sure only admin user is posting data By using VerifyAdmin
 *  
 * 
 * 
 */