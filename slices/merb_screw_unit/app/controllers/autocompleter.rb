class MerbScrewUnit::Autocompleter < MerbScrewUnit::Application

  def index
    render :layout => false
  end

  def spec
    @spec_url = url(:controller => "merb_screw_unit/autocompleter", :action => "index")
    render
  end
  
end