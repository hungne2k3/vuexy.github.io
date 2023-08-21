export default function MyFooterLayOut() {
    return (
        <div className='footer-lauout'>
          <p className='text-sm'>Showing 1 to 10 of 50 entries</p>
    
          <nav className='v-pagination '>
            <ul className='v-pagination__list'>
              <li className='v-pagination__prev'>
                <button type='buttom' className='v-btn--disabled'>
                  <span className='v-btn__content'> Previous </span>
                </button>
              </li>
    
              <li className='v-pagination__prev'>
                <button type='buttom' className='v-btn--icon select'>
                  <span className='v-btn__content--number'> 1 </span>
                </button>
              </li>
    
              <li className='v-pagination__prev'>
                <button type='buttom' className='v-btn--icon'>
                  <span className='v-btn__content--number'> 2 </span>
                </button>
              </li>
    
              <li className='v-pagination__prev'>
                <button type='buttom' className='v-btn--icon'>
                  <span className='v-btn__content--number'> 3 </span>
                </button>
              </li>
    
              <li className='v-pagination__prev'>
                <button type='buttom' className='v-btn--icon'>
                  <span className='v-btn__content--number'> 4 </span>
                </button>
              </li>
    
              <li className='v-pagination__prev'>
                <button type='buttom' className='v-btn--icon'>
                  <span className='v-btn__content--number'> 5 </span>
                </button>
              </li>
    
              <li className='v-pagination__prev'>
                <button type='buttom' className='v-btn--disabled v-btn--2'>
                  <span className='v-btn__content--2'> Next </span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      );
}