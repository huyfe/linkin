import React, { Component } from 'react';

// this is a function popup chat when you click the circle button message it will show presently

class PopupWindow extends Component {
    componentDidMount() {
        this.scLaucher = document.querySelector('#sc-launcher');
        this.scLauncher = addEventListener('click', this.interceptLaucherClick);
    }
    componentWillUnmount() {
        this.scLauncher.removeEventListener('click', this.interceptLaucherClick);
    }
    interceptLaucherClick = (e) {
        const { isOpen } = this.props;
        const clickedOutside = !this.emojiPopup.contains(e.target) && isOpen;
        clickedOutside && this.propsonClickOutside(e);
    }

    render() {
        const {isOpen, children } = this.props;
        return (
            <div className="sc-popup-window" ref={e => this.emojiPopup = e}>
                <div className={`sc-popup-window--cointainer ${isOpen ? '' : 'closed'}`}>
                    <input
                        onChange={this.props.onInputChange}
                        className="sc-popup-window--search"
                        placeholder="Search emoji..."
                    />
                    {children}
                    </div>
                </div>
            );
        }
}

export default PopupWindow;