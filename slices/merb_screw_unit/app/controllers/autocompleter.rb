class MerbScrewUnit::Autocompleter < MerbScrewUnit::Application

  def spec
    @spec_url = url(:controller => "merb_screw_unit/autocompleter", :action => "index")
    render
  end
    
  def index
    render :layout => "spec"
  end
    
end