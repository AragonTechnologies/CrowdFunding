import React from 'react';


const CookieModal = () => {
    return(
        <div className="modal fade" tabIndex="-1" role="dialog" id="modal-cookies" data-backdrop="false" aria-labelledby="modal-cookies" aria-hidden="true">
        <div className="modal-dialog modal-dialog-aside left-4 right-4 bottom-4">
            <div className="modal-content bg-dark-dark">
                <div className="modal-body">
                    {/* <!-- Text -->
                     */}
                    <p className="text-sm text-white mb-3">
                        We use cookies so that our themes work for you. By using our website, you agree to our use of cookies.
                    </p>
                    {/* <!-- Buttons -->
                     */}
                    <a href="pages/utility/terms.html" className="btn btn-sm btn-white" target="_blank">Learn more</a>
                    <button type="button" className="btn btn-sm btn-primary mr-2" data-dismiss="modal">OK</button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default CookieModal;